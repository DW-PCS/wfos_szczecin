import { sortProgramsByDeadline, sortProgramsByName } from '@/lib/utils/programs';
import { Program } from '@/types/program';
import { useState, useMemo } from 'react';


type SortOption = 'name' | 'deadline' | 'none';

interface UseProgramsSortingReturn {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  sortedPrograms: Program[];
}

export function useProgramsSorting(programs: Program[]): UseProgramsSortingReturn {
  const [sortBy, setSortBy] = useState<SortOption>('none');

  const sortedPrograms = useMemo(() => {
    switch (sortBy) {
      case 'name':
        return sortProgramsByName(programs);
      case 'deadline':
        return sortProgramsByDeadline(programs);
      default:
        return programs;
    }
  }, [programs, sortBy]);

  return {
    sortBy,
    setSortBy,
    sortedPrograms,
  };
}
