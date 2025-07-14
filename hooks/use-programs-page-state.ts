import { useEffect, useState } from 'react';

import { PROGRAM_CATEGORIES } from '@/constants/programs';
import { filterProgramsByCategory } from '@/lib/utils/programs';
import { Program, ProgramsPageState } from '@/types/program';


export function useProgramsPageState(
  programs: Program[],
  selectedCategory: string,
  hasHydrated: boolean
): ProgramsPageState {
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);

  useEffect(() => {
    if (hasHydrated) {
      const filtered = filterProgramsByCategory(programs, selectedCategory);
      setFilteredPrograms(filtered);
    }
  }, [selectedCategory, programs, hasHydrated]);

  return {
    filteredPrograms,
    categories: PROGRAM_CATEGORIES,
    isLoading: !hasHydrated,
  };
}
