import { FileCategory, FileItem } from '@/types/file';
import { FilesContentArea } from './files-content-area';
import { FilesSidebar } from './files-sidebar';

interface FilesMainContentProps {
  categories: FileCategory[];
  activeSection: string;
  currentSection?: FileCategory;
  searchQuery: string;
  filteredFiles: FileItem[];
  getFilesByCategory: (id: string) => FileItem[];
  onSectionChange: (sectionId: string) => void;
  onSearchChange: (query: string) => void;
}

export function FilesMainContent({
  categories,
  activeSection,
  currentSection,
  searchQuery,
  filteredFiles,
  getFilesByCategory,
  onSectionChange,
  onSearchChange,
}: FilesMainContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FilesSidebar
          categories={categories}
          activeSection={activeSection}
          getFilesByCategory={getFilesByCategory}
          onSectionChange={onSectionChange}
        />

        <FilesContentArea
          currentSection={currentSection}
          searchQuery={searchQuery}
          filteredFiles={filteredFiles}
          onSearchChange={onSearchChange}
        />
      </div>
    </div>
  );
}
