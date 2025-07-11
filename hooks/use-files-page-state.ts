import { FileCategory, FileItem } from '@/types/file';
import { useState } from 'react';
import { useFilesFilters } from './use-files-filters';

export function useFilesPageState(
  categories: FileCategory[],
  getFilesByCategory: (categoryId: string) => FileItem[]
) {
  const [activeSection, setActiveSection] = useState(categories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const currentSection = categories.find(section => section.id === activeSection);
  const sectionFiles = currentSection ? getFilesByCategory(currentSection.id) : [];

  const { filteredFiles } = useFilesFilters(sectionFiles, searchQuery);

  return {
    // State
    activeSection,
    searchQuery,

    // Computed values
    currentSection,
    sectionFiles,
    filteredFiles,

    // Actions
    setActiveSection,
    setSearchQuery,
  };
}
