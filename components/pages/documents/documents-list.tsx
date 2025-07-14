import { Document } from '@/types/document';
import { DocumentCard } from './document-card';

interface DocumentsListProps {
  documents: Document[];
}

export function DocumentsList({ documents }: DocumentsListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {documents.map(document => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}
