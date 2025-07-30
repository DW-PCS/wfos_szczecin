import { FileCategory, FileItem } from '@/types/file';
import { FileItemComponent } from '../file-item';
import { FilesEmptyState } from '../files-empty-state';
import { FilesFilters } from '../files-filters';

interface FilesTabProps {
  files: FileItem[];
  categories: FileCategory[];
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (categoryId: string) => void;
  onDownloadFile: (file: FileItem) => void;
  onEditFile: (file: FileItem) => void;
  onDeleteFile: (fileId: string) => void;
}

export function FilesTab({
  files,
  categories,
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onDownloadFile,
  onEditFile,
  onDeleteFile,
}: FilesTabProps) {
  return (
    <>
      <FilesFilters
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        categories={categories}
      />

      <div className="space-y-4">
        {files.length > 0 ? (
          files.map(file => {
            const category = categories.find(c => c.id === file.categoryId);
            return (
              <FileItemComponent
                key={file.id}
                file={file}
                category={category}
                onDownload={onDownloadFile}
                onEdit={onEditFile}
                onDelete={onDeleteFile}
              />
            );
          })
        ) : (
          <FilesEmptyState searchQuery={searchQuery} selectedCategory={selectedCategory} />
        )}
      </div>
    </>
  );
}
