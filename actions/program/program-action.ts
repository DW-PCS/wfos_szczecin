'use server';

import { prisma } from '@/lib/prisma';
import { ProgramPageType } from '@/types/program';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createProgramSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  description: z.string().min(1, 'Description is required'),
  status: z.string().max(50),
  budget: z.string().max(100),
  deadline: z.string().max(20),
  beneficiaryCategories: z.array(z.string()).min(1, 'At least one category is required'),
  startDate: z.string(),
  endDate: z.string(),
  maxSupport: z.string().max(100),
  funding: z.string().max(50),
  programLink: z.string().url().optional().or(z.literal('')),
  linkedPageSlug: z.string().max(255).optional().or(z.literal('')),
  showOnHomepage: z.boolean().optional().default(false),
  type: z.string().optional().default('general'),
});

function extractFormData(formData: FormData) {
  return {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    status: formData.get('status') as string,
    budget: formData.get('budget') as string,
    deadline: formData.get('deadline') as string,
    beneficiaryCategories: JSON.parse(formData.get('beneficiaryCategories') as string),
    startDate: formData.get('startDate') as string,
    endDate: formData.get('endDate') as string,
    maxSupport: formData.get('maxSupport') as string,
    funding: formData.get('funding') as string,
    programLink: (formData.get('programLink') as string) || '',
    linkedPageSlug: (formData.get('linkedPageSlug') as string) || '',
    showOnHomepage: formData.get('showOnHomepage') === 'true',
    type: (formData.get('type') as string) || undefined,
  };
}

function prepareDatabaseData(validatedData: z.infer<typeof createProgramSchema>) {
  return {
    ...validatedData,
    startDate: new Date(validatedData.startDate),
    endDate: new Date(validatedData.endDate),
    programLink: validatedData.programLink === '' ? null : validatedData.programLink,
    linkedPageSlug: validatedData.linkedPageSlug === '' ? null : validatedData.linkedPageSlug,
  };
}

export async function getPrograms(): Promise<ProgramPageType[]> {
  try {
    const programs = await prisma.program.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return programs as ProgramPageType[];
  } catch (error) {
    throw new Error('Failed to fetch programs');
  }
}

export async function getProgramById(id: number): Promise<ProgramPageType | null> {
  try {
    const program = await prisma.program.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        budget: true,
        deadline: true,
        beneficiaryCategories: true,
        startDate: true,
        endDate: true,
        maxSupport: true,
        funding: true,
        programLink: true,
        linkedPageSlug: true,
        showOnHomepage: true,
        type: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return program as ProgramPageType | null;
  } catch (error) {
    console.error('Error fetching program:', error);
    throw new Error('Failed to fetch program');
  }
}

export async function createProgram(formData: FormData) {
  try {
    const rawData = extractFormData(formData);
    const validatedData = createProgramSchema.parse(rawData);
    const databaseData = prepareDatabaseData(validatedData);

    await prisma.program.create({
      data: databaseData,
    });

    revalidatePath('/programs');
    return { success: true };
  } catch (error) {
    console.error('Error creating program:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      };
    }

    return {
      success: false,
      error: 'Failed to create program',
    };
  }
}

export async function updateProgram(id: number, formData: FormData) {
  try {
    const rawData = extractFormData(formData);
    const validatedData = createProgramSchema.parse(rawData);
    const databaseData = prepareDatabaseData(validatedData);

    await prisma.program.update({
      where: { id },
      data: databaseData,
    });

    revalidatePath('/programs');
    revalidatePath(`/programs/${id}`);
    return { success: true };
  } catch (error) {
    console.error('Error updating program:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        details: error.issues,
      };
    }

    return {
      success: false,
      error: 'Failed to update program',
    };
  }
}

export async function deleteProgramById(programId: number) {
  try {
    await prisma.program.delete({
      where: { id: programId },
    });

    revalidatePath('/programs');
    return { success: true };
  } catch (error) {
    console.error('Error deleting program:', error);
    return {
      success: false,
      error: 'Failed to delete program',
    };
  }
}
