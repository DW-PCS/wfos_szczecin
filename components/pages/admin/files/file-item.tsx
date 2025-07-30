'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileCategory, FileItem } from '@/types/file';

import { getFileIcon } from '@/lib/utils/files';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Calendar, Download, Edit, HardDrive } from 'lucide-react';
import { FileDeleteDialog } from './file-delete-dialog';

interface FileItemProps {
  file: FileItem;
  category: FileCategory | undefined;
  onDownload: (file: FileItem) => void;
  onEdit: (file: FileItem) => void;
  onDelete: (fileId: string) => void;
}

export function FileItemComponent({ file, category, onDownload, onEdit, onDelete }: FileItemProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="text-3xl">{getFileIcon(file.type)}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                <Badge variant="secondary">{file.type}</Badge>
                {category && <Badge variant="outline">{category.title}</Badge>}
              </div>
              <p className="text-gray-600 mb-3">{file.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <HardDrive className="h-4 w-4" />
                  <span>{file.size}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{format(new Date(file.uploadedAt), 'dd MMM yyyy', { locale: pl })}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => onDownload(file)}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => onEdit(file)}>
              <Edit className="h-4 w-4" />
            </Button>
            <FileDeleteDialog fileName={file.name} onConfirm={() => onDelete(file.id)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
