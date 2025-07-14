import { searchPrograms } from '@/lib/utils/programs';
import { Program } from '@/types/program';
import { useState, useMemo } from 'react';


interface UseProgramsSearchReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredPrograms: Program[];
  clearSearch: () => void;
}

export function useProgramsSearch(programs: Program[]): UseProgramsSearchReturn {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = useMemo(
    () => searchPrograms(programs, searchTerm),
    [programs, searchTerm]
  );

  const clearSearch = () => setSearchTerm('');

  return {
    searchTerm,
    setSearchTerm,
    filteredPrograms,
    clearSearch,
  };
}
