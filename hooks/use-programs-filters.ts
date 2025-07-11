import { Program } from '@/types/program';
import { useMemo } from 'react';

interface UseProgramsFiltersReturn {
  filteredPrograms: Program[];
}

export function useProgramsFilters(
  programs: Program[],
  activeCategory: string,
  searchTerm: string
): UseProgramsFiltersReturn {
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      interface CategoryMatchOptions {
        activeCategory: string;
        category: string;
      }

      const matchesCategory: boolean =
        program.beneficiaryCategories?.some((category: string) => {
          const options: CategoryMatchOptions = { activeCategory, category };
          const categoryLower: string = options.category.toLowerCase();
          switch (options.activeCategory) {
            case 'osoba-fizyczna':
              return categoryLower.includes('osoba fizyczna');
            case 'przedsiebiorca':
              return categoryLower.includes('przedsiębiorca');
            case 'jst':
              return categoryLower.includes('jednostka samorządu') || categoryLower.includes('jst');
            case 'pjb':
              return categoryLower.includes('państwowe jednostki') || categoryLower.includes('pjb');
            case 'pozostale':
              return (
                !categoryLower.includes('osoba fizyczna') &&
                !categoryLower.includes('przedsiębiorca') &&
                !categoryLower.includes('jednostka samorządu') &&
                !categoryLower.includes('państwowe jednostki')
              );
            default:
              return true;
          }
        }) || activeCategory === 'pozostale';

      const matchesSearch =
        searchTerm === '' ||
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [programs, activeCategory, searchTerm]);

  return { filteredPrograms };
}
