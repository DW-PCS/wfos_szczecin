import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PdfFile } from '@/types/program';
import { FileText, X } from 'lucide-react';
import { RefObject } from 'react';

interface PdfUploadSectionProps {
  pdfFiles: PdfFile[];
  isUploading: boolean;
  pdfInputRef: RefObject<HTMLInputElement | null>;
  onPdfUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePdf: (pdfId: string) => void;
}

export const PdfUploadSection = ({
  pdfFiles,
  isUploading,
  pdfInputRef,
  onPdfUpload,
  onRemovePdf,
}: PdfUploadSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pliki do pobrania</CardTitle>
        <CardDescription>Dodaj pliki PDF dostępne do pobrania</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            ref={pdfInputRef}
            onChange={onPdfUpload}
            multiple
            accept=".pdf"
            className="hidden"
          />
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-gray-600 mb-2">Przeciągnij pliki PDF tutaj lub kliknij aby wybrać</p>
            <Button
              type="button"
              variant="outline"
              onClick={() => pdfInputRef.current?.click()}
              disabled={isUploading}
            >
              <FileText className="w-4 h-4 mr-2" />
              {isUploading ? 'Przesyłanie...' : 'Wybierz pliki PDF'}
            </Button>
          </div>
        </div>

        {pdfFiles.length > 0 && (
          <div className="space-y-2">
            {pdfFiles.map(pdf => (
              <div
                key={pdf.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{pdf.filename}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemovePdf(String(pdf.id))}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
