'use server';

import { prisma } from '@/lib/prisma';
import { Page } from '@/types/page';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export interface ActionResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
  details?: z.ZodIssue[];
}

export interface ProgramPagesResult {
  data: Page[];
  error?: string;
}

const programPageSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  content: z.string().min(1, 'Content is required'),
  slug: z.string().min(1, 'Slug is required').max(255).optional(),
  metaTitle: z.string().max(160).optional().default(''),
  metaDescription: z.string().max(300).optional().default(''),
  uploadedImages: z.array(z.string()).default([]),
  selectedComponents: z.any().nullable().optional(),
  author: z.string().max(100).optional().default(''),
  dateAdded: z.string().optional().default(''),
  published: z.boolean().default(false),
  type: z.enum(['general', 'program']).default('general'),
});

type ProgramPageInput = z.infer<typeof programPageSchema>;

const parseFormValue = (value: FormDataEntryValue | null): string => {
  return value ? (value as string) : '';
};

const parseJsonFormValue = <T>(value: FormDataEntryValue | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value as string);
  } catch {
    return fallback;
  }
};

const extractFormData = (formData: FormData): Record<string, any> => ({
  title: formData.get('title') as string,
  content: formData.get('content') as string,
  slug: parseFormValue(formData.get('slug')),
  metaTitle: parseFormValue(formData.get('metaTitle')),
  metaDescription: parseFormValue(formData.get('metaDescription')),
  uploadedImages: parseJsonFormValue(formData.get('uploadedImages'), []),
  selectedComponents: parseJsonFormValue(formData.get('selectedComponents'), ''),
  author: parseFormValue(formData.get('author')),
  dateAdded: parseFormValue(formData.get('dateAdded')),
  published: formData.get('published') === 'true',
  type: parseFormValue(formData.get('type')) || 'general',
});

const prepareDatabaseData = (data: ProgramPageInput) => ({
  title: data.title,
  content: data.content,
  slug: data.slug || null,
  metaTitle: data.metaTitle || data.title,
  metaDescription: data.metaDescription || '',
  uploadedImages: data.uploadedImages,
  selectedComponents: data.selectedComponents,
  author: data.author || 'Admin',
  dateAdded: data.dateAdded || new Date().toISOString(),
  published: data.published,
  type: data.type,
});

export const getProgramPages = async (): Promise<ProgramPagesResult> => {
  try {
    const programPages = await prisma.programPage.findMany({
      include: { pdfFiles: true },
      orderBy: { id: 'desc' },
    });
    return { data: programPages };
  } catch (error) {
    console.error('Database error:', error);
    return { data: [], error: 'Failed to fetch program pages' };
  }
};

export const getPublishedProgramPages = async (): Promise<ProgramPagesResult> => {
  try {
    const programPages = await prisma.programPage.findMany({
      where: { published: true },
      include: { pdfFiles: true },
      orderBy: { id: 'desc' },
    });

    return { data: programPages };
  } catch (error) {
    console.error('Database error:', error);
    return { data: [], error: 'Failed to fetch published program pages' };
  }
};

export const getProgramPageById = async (id: number): Promise<Page | null> => {
  try {
    const programPage = await prisma.programPage.findUnique({
      where: { id },
      include: { pdfFiles: true },
    });

    return programPage;
  } catch (error) {
    console.error('Error fetching program page:', error);
    return null;
  }
};

export const getProgramPageBySlug = async (slug: string): Promise<Page | null> => {
  try {
    const programPage = await prisma.programPage.findUnique({
      where: { slug },
      include: { pdfFiles: true },
    });

    return programPage;
  } catch (error) {
    console.error('Error fetching program page by slug:', error);
    return null;
  }
};

const isSlugUnique = async (slug: string, excludeId?: number): Promise<boolean> => {
  if (!slug) return true; // Empty slug is allowed
  const whereClause = excludeId ? { slug, NOT: { id: excludeId } } : { slug };
  const existingPage = await prisma.programPage.findFirst({ where: whereClause });
  return !existingPage;
};

export const createProgramPage = async (
  formData: FormData
): Promise<ActionResult<{ id: number }>> => {
  try {
    const rawData = extractFormData(formData);
    const validatedData = programPageSchema.parse(rawData);

    if (validatedData.slug) {
      const isUnique = await isSlugUnique(validatedData.slug);
      if (!isUnique) {
        return {
          success: false,
          error: 'A page with this slug already exists',
        };
      }
    }

    const databaseData = prepareDatabaseData(validatedData);
    const createdPage = await prisma.programPage.create({
      data: databaseData,
      select: { id: true },
    });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');

    return {
      success: true,
      data: { id: createdPage.id },
    };
  } catch (error) {
    console.error('Error creating program page:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      };
    }

    return {
      success: false,
      error: 'Failed to create program page',
    };
  }
};

export const updateProgramPage = async (id: number, formData: FormData): Promise<ActionResult> => {
  try {
    const rawData = extractFormData(formData);
    const validatedData = programPageSchema.parse(rawData);

    if (validatedData.slug) {
      const isUnique = await isSlugUnique(validatedData.slug, id);
      if (!isUnique) {
        return {
          success: false,
          error: 'A page with this slug already exists',
        };
      }
    }

    const databaseData = prepareDatabaseData(validatedData);
    await prisma.programPage.update({
      where: { id },
      data: databaseData,
    });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');
    if (databaseData.slug) {
      revalidatePath(`/programs/${databaseData.slug}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating program page:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      };
    }

    return {
      success: false,
      error: 'Failed to update program page',
    };
  }
};

export const deleteProgramPage = async (id: number): Promise<ActionResult> => {
  try {
    await prisma.programPage.delete({ where: { id } });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');

    return { success: true };
  } catch (error) {
    console.error('Error deleting program page:', error);
    return {
      success: false,
      error: 'Failed to delete program page',
    };
  }
};

export const toggleProgramPagePublish = async (id: number): Promise<ActionResult> => {
  try {
    const programPage = await prisma.programPage.findUnique({
      where: { id },
      select: { published: true, slug: true },
    });

    if (!programPage) {
      return {
        success: false,
        error: 'Program page not found',
      };
    }

    await prisma.programPage.update({
      where: { id },
      data: { published: !programPage.published },
    });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');
    if (programPage.slug) {
      revalidatePath(`/programs/${programPage.slug}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error toggling publish status:', error);
    return {
      success: false,
      error: 'Failed to update publish status',
    };
  }
};
