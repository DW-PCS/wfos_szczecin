import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Document } from '@/types/document';
import { Download, File, FileText, FileType } from 'lucide-react';

interface DocumentCardProps {
  document: Document;
}

function getFileIcon(type: string) {
  switch (type.toLowerCase()) {
    case 'pdf':
      return <FileType className="h-8 w-8 text-red-500" />;
    case 'docx':
    case 'doc':
      return <File className="h-8 w-8 text-blue-500" />;
    case 'xlsx':
    case 'xls':
      return <File className="h-8 w-8 text-green-500" />;
    default:
      return <FileText className="h-8 w-8 text-gray-500" />;
  }
}

export function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">{getFileIcon(document.type)}</div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-green transition-colors">
              {document.name}
            </h3>
            <p className="text-gray-600 mb-3">{document.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Badge variant="outline">{document.type}</Badge>
              <span>{document.size}</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a href={document.url} download>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Pobierz
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
