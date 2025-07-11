import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

import { getFileIcon, handleFileDownload } from '@/lib/utils/files';
import { FileItem } from '@/types/file';
import { FileCardMeta } from './file-card-meta';

interface FileCardProps {
  file: FileItem;
}

export function FileCard({ file }: FileCardProps) {
  const handleDownload = () => handleFileDownload(file);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-primary-green/30 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="text-3xl">{getFileIcon(file.type)}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-primary-green transition-colors">
              {file.name}
            </h3>
            <p className="text-gray-600 mb-3 leading-relaxed">{file.description}</p>
            <FileCardMeta file={file} />
          </div>
        </div>
        <Button
          className="bg-primary-green hover:bg-primary-lime text-white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-2" />
          Pobierz
        </Button>
      </div>
    </div>
  );
}
