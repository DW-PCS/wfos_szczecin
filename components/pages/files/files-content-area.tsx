import { SearchBar } from '@/components/features';
import { FileCategory, FileItem } from '@/types/file';
import { FilesHelpSection } from './files-help-section';
import { FilesList } from './files-list';
import { FilesSectionHeader } from './files-section-header';

interface FilesContentAreaProps {
  currentSection?: FileCategory;
  searchQuery: string;
  filteredFiles: FileItem[];
  onSearchChange: (query: string) => void;
}

export function FilesContentArea({
  currentSection,
  searchQuery,
  filteredFiles,
  onSearchChange,
}: FilesContentAreaProps) {
  return (
    <div className="lg:col-span-3">
      <SearchBar
        searchTerm={searchQuery}
        onSearchChange={onSearchChange}
        resultCount={filteredFiles.length}
        itemType="plik"
        placeholder="Szukaj plików..."
      />

      {currentSection && (
        <FilesSectionHeader section={currentSection} filesCount={filteredFiles.length} />
      )}

      <FilesList files={filteredFiles} searchQuery={searchQuery} />

      <FilesHelpSection />
    </div>
  );
}
