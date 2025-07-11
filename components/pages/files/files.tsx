'use client';

import { useState } from 'react';

import { FilesHeroSection, FilesMainContent } from '@/components/pages/files';
import { defaultCategories } from '@/constants/files';
import { useFilesFilters } from '@/hooks/use-files-filters';
import { getFilesByCategory } from '@/lib/utils/helpers';
import { FileCategory } from '@/types/file';

interface FilesPageProps {
  categories: FileCategory[];
}

export default function FilesPage({ categories }: FilesPageProps) {
  const [activeSection, setActiveSection] = useState(defaultCategories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const currentSection = defaultCategories.find(section => section.id === activeSection);

  const sectionFiles = currentSection ? getFilesByCategory(activeSection) : [];

  const { filteredFiles } = useFilesFilters(sectionFiles, searchQuery);

  return (
    <div className="min-h-screen bg-gray-50">
      <FilesHeroSection />

      <FilesMainContent
        categories={categories}
        activeSection={activeSection}
        currentSection={currentSection}
        searchQuery={searchQuery}
        filteredFiles={filteredFiles}
        getFilesByCategory={getFilesByCategory}
        onSectionChange={setActiveSection}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}
