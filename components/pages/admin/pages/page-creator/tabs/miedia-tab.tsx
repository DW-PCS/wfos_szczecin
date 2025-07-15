import { PdfFile } from '@/types/program';
import { RefObject } from 'react';
import { ImageUploadSection } from '../img-upload';
import { PdfUploadSection } from '../pdf-upload';

interface MediaTabProps {
  uploadedImages: string[];
  pdfFiles: PdfFile[];
  isUploading: boolean;
  fileInputRef: RefObject<HTMLInputElement | null>;
  pdfInputRef: RefObject<HTMLInputElement | null>;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPdfUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (imageUrl: string) => void;
  onRemovePdf: (pdfId: string) => void;
}

export const MediaTab = ({
  uploadedImages,
  pdfFiles,
  isUploading,
  fileInputRef,
  pdfInputRef,
  onImageUpload,
  onPdfUpload,
  onRemoveImage,
  onRemovePdf,
}: MediaTabProps) => {
  return (
    <div className="space-y-6">
      <ImageUploadSection
        uploadedImages={uploadedImages}
        isUploading={isUploading}
        fileInputRef={fileInputRef}
        onImageUpload={onImageUpload}
        onRemoveImage={onRemoveImage}
      />

      <PdfUploadSection
        pdfFiles={pdfFiles}
        isUploading={isUploading}
        pdfInputRef={pdfInputRef}
        onPdfUpload={onPdfUpload}
        onRemovePdf={onRemovePdf}
      />
    </div>
  );
};
