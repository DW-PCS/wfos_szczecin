import { PROGRAM_STATUS_COLORS } from '@/constants/programs';
import { Program, ProgramPageType } from '@/types/program';

export const getStatusColor = (status: string | undefined): string => {
  return (
    PROGRAM_STATUS_COLORS[status as keyof typeof PROGRAM_STATUS_COLORS] ||
    'bg-gray-100 text-gray-800'
  );
};

export const getCategoryDisplayName = (categories: string[]): string => {
  if (categories.includes('Osoba fizyczna')) return 'Mieszkańcy';
  if (categories.includes('Przedsiębiorca')) return 'Przedsiębiorcy';
  if (categories.includes('Jednostka samorządu terytorialnego')) return 'Jednostki publiczne';
  if (categories.includes('Państwowe jednostki budżetowe')) return 'Instytucje';
  return categories[0] || 'Różne';
};

export const filterProgramsByCategory = (
  programs: Program[],
  selectedCategory: string
): Program[] => {
  const activePrograms = programs.filter(program => program.status === 'otwarty');

  if (selectedCategory === 'all') {
    return activePrograms;
  }

  return activePrograms.filter(program => program.beneficiaryCategories.includes(selectedCategory));
};

export const getActivePrograms = (programs: Program[]): Program[] => {
  return programs.filter(program => program.status === 'otwarty');
};

export const sortProgramsByName = (programs: Program[]): Program[] => {
  return [...programs].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortProgramsByDeadline = (programs: Program[]): Program[] => {
  return [...programs].sort(
    (a, b) => new Date(a.deadline ?? 0).getTime() - new Date(b.deadline ?? 0).getTime()
  );
};

export const getProgramsByStatus = (programs: Program[], status: string): Program[] => {
  return programs.filter(program => program.status === status);
};

export const searchPrograms = (programs: Program[], searchTerm: string): Program[] => {
  if (!searchTerm.trim()) return programs;

  const term = searchTerm.toLowerCase();
  return programs.filter(
    (program: Program) =>
      program.name.toLowerCase().includes(term) ||
      program.description.toLowerCase().includes(term) ||
      program.beneficiaryCategories.some((cat: string) => cat.toLowerCase().includes(term))
  );
};

export const isValidProgramId = (id: string): boolean => {
  const parsedId = Number.parseInt(id);
  return !isNaN(parsedId) && parsedId > 0;
};

export function getPageById({ id, programs }: { id: number; programs: ProgramPageType[] }) {
  return programs.find(page => Number(page.id) === id);
}

export function getPageBySlug({ slug, programs }: { slug: string; programs: ProgramPageType[] }) {
  return programs.find(page => page.slug === slug);
}
