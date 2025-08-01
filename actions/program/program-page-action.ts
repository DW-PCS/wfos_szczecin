'use server';

import { prisma } from '@/lib/prisma';
import { ProgramPageType } from '@/types/program';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export interface ActionResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
  details?: z.ZodIssue[];
}

export interface ProgramPagesResult {
  data: ProgramPageType[];
  error?: string;
}

const programPageSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  content: z.string().nullish(),
  slug: z.string().min(1, 'Slug is required').max(255),
  metaTitle: z.string().max(160).optional(),
  metaDescription: z.string().max(300).nullish(),
  description: z.string().optional(),
  uploadedImages: z.array(z.string()).default([]),
  selectedComponents: z.any().nullish(),
  author: z.string().max(100).nullish(),
  dateAdded: z.string().nullish(),
  published: z.boolean().default(false),
  type: z.enum(['general', 'program']).nullish(),
  beneficiaryCategories: z.array(z.string()).min(1, 'At least one category is required'),
  maxSupport: z.string().max(100).nullish(),
  funding: z.string().max(100).nullish(),
  deadline: z.string().max(50).nullish(),
  status: z.string().max(50).nullish(),
  budget: z.string().max(100).nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  programLink: z.string().url().nullish().or(z.literal('')),
  linkedPageSlug: z.string().max(255).nullish().or(z.literal('')),
  showOnHomepage: z.boolean().default(false),
});

type ProgramPageInput = z.infer<typeof programPageSchema>;

const parseFormValue = (value: FormDataEntryValue | null): string | undefined => {
  if (!value || value === '') return undefined;
  return value as string;
};

const parseJsonFormValue = <T>(value: FormDataEntryValue | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value as string);
  } catch {
    return fallback;
  }
};

const extractFormData = (formData: FormData): ProgramPageInput => ({
  name: formData.get('name') as string,
  content: parseFormValue(formData.get('content')),
  slug: formData.get('slug') as string,
  metaTitle: parseFormValue(formData.get('metaTitle')),
  metaDescription: parseFormValue(formData.get('metaDescription')),
  description: parseFormValue(formData.get('description')),
  uploadedImages: parseJsonFormValue(formData.get('uploadedImages'), []),
  selectedComponents: parseJsonFormValue(formData.get('selectedComponents'), null),
  author: parseFormValue(formData.get('author')),
  dateAdded: parseFormValue(formData.get('dateAdded')),
  published: formData.get('published') === 'true',
  type: parseFormValue(formData.get('type')) as 'general' | 'program' | null,
  beneficiaryCategories: parseJsonFormValue(formData.get('beneficiaryCategories'), []),
  maxSupport: parseFormValue(formData.get('maxSupport')),
  funding: parseFormValue(formData.get('funding')),
  deadline: parseFormValue(formData.get('deadline')),
  status: parseFormValue(formData.get('status')),
  budget: parseFormValue(formData.get('budget')),
  startDate: parseFormValue(formData.get('startDate')),
  endDate: parseFormValue(formData.get('endDate')),
  programLink: parseFormValue(formData.get('programLink')) || null,
  linkedPageSlug: parseFormValue(formData.get('linkedPageSlug')) || null,
  showOnHomepage: formData.get('showOnHomepage') === 'true',
});

const prepareDatabaseData = (data: ProgramPageInput) => ({
  ...data,
  startDate: data.startDate ? new Date(data.startDate) : null,
  endDate: data.endDate ? new Date(data.endDate) : null,
  programLink: data.programLink === '' ? null : data.programLink,
  linkedPageSlug: data.linkedPageSlug === '' ? null : data.linkedPageSlug,
});

export const getProgramPages = async (): Promise<ProgramPagesResult> => {
  try {
    const programPages = await prisma.programPage.findMany({
      include: { pdfFiles: true },
      orderBy: { createdAt: 'desc' },
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
      orderBy: { createdAt: 'desc' },
    });

    return { data: programPages };
  } catch (error) {
    console.error('Database error:', error);
    return { data: [], error: 'Failed to fetch published program pages' };
  }
};

export const getProgramPageById = async (id: number): Promise<ProgramPageType | null> => {
  try {
    const programPage = await prisma.programPage.findUnique({
      where: { id },
      include: { pdfFiles: true },
    });

    return programPage;
  } catch (error) {
    console.error('Error fetching program page:', error);
    throw new Error('Failed to fetch program page');
  }
};

export const getProgramPageBySlug = async (slug: string): Promise<ProgramPageType | null> => {
  try {
    const programPage = await prisma.programPage.findUnique({
      where: { slug },
      include: { pdfFiles: true },
    });

    return programPage;
  } catch (error) {
    console.error('Error fetching program page by slug:', error);
    throw new Error('Failed to fetch program page');
  }
};

export const getHomepageProgramPages = async (): Promise<ProgramPagesResult> => {
  try {
    const programPages = await prisma.programPage.findMany({
      where: {
        showOnHomepage: true,
        published: true,
      },
      include: { pdfFiles: true },
      orderBy: { createdAt: 'desc' },
    });

    return { data: programPages };
  } catch (error) {
    console.error('Database error:', error);
    return { data: [], error: 'Failed to fetch homepage program pages' };
  }
};

const checkSlugUniqueness = async (slug: string, excludeId?: number) => {
  const whereClause = excludeId ? { slug, NOT: { id: excludeId } } : { slug };

  return await prisma.programPage.findFirst({ where: whereClause });
};

export const createProgramPage = async (
  formData: FormData
): Promise<ActionResult<{ id: number }>> => {
  try {
    const rawData = extractFormData(formData);
    const validatedData = programPageSchema.parse(rawData);
    const databaseData = prepareDatabaseData(validatedData);

    const existingPage = await checkSlugUniqueness(databaseData.slug);
    if (existingPage) {
      return {
        success: false,
        error: 'A page with this slug already exists',
      };
    }

    await prisma.programPage.create({ data: databaseData });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');

    return { success: true };
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
    const databaseData = prepareDatabaseData(validatedData);

    const existingPage = await checkSlugUniqueness(databaseData.slug, id);
    if (existingPage) {
      return {
        success: false,
        error: 'A page with this slug already exists',
      };
    }

    await prisma.programPage.update({
      where: { id },
      data: databaseData,
    });

    revalidatePath('/admin/program-pages');
    revalidatePath('/programs');
    revalidatePath(`/programs/${databaseData.slug}`);

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
      select: { published: true },
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

    return { success: true };
  } catch (error) {
    console.error('Error toggling publish status:', error);
    return {
      success: false,
      error: 'Failed to update publish status',
    };
  }
};
