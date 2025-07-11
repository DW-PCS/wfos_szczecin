import { FileItem } from '@/types/file';
import { FileCard } from './file-card';
import { FilesEmptyState } from './files-empty-state';

interface FilesListProps {
  files: FileItem[];
  searchQuery: string;
}

export function FilesList({ files, searchQuery }: FilesListProps) {
  if (files.length === 0) {
    return <FilesEmptyState searchQuery={searchQuery} />;
  }

  return (
    <div className="space-y-4">
      {files.map(file => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}
