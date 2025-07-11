import { FileItem } from '@/types/file';
import { Calendar, File } from 'lucide-react';

interface FileCardMetaProps {
  file: FileItem;
}

export function FileCardMeta({ file }: FileCardMetaProps) {
  return (
    <div className="flex items-center space-x-4 text-sm text-gray-500">
      <span className="flex items-center space-x-1">
        <File className="h-4 w-4" />
        <span>{file.type}</span>
      </span>
      <span>{file.size}</span>
      <span className="flex items-center space-x-1">
        <Calendar className="h-4 w-4" />
        <span>{new Date(file.uploadedAt).toLocaleDateString('pl-PL')}</span>
      </span>
    </div>
  );
}
