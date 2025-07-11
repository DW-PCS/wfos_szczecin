import { FileItem } from '@/types/file';
import { useMemo } from 'react';


interface UseFilesFiltersReturn {
  filteredFiles: FileItem[];
}

export function useFilesFilters(files: FileItem[], searchQuery: string): UseFilesFiltersReturn {
  const filteredFiles = useMemo(() => {
    if (!searchQuery) return files;

    return files.filter(
      file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [files, searchQuery]);

  return { filteredFiles };
}
