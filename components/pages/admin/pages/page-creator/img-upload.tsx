import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageIcon, X } from 'lucide-react';
import { RefObject } from 'react';

interface ImageUploadSectionProps {
  uploadedImages: string[];
  isUploading: boolean;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (imageUrl: string) => void;
}

export const ImageUploadSection = ({
  uploadedImages,
  isUploading,
  fileInputRef,
  onImageUpload,
  onRemoveImage,
}: ImageUploadSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Obrazy</CardTitle>
        <CardDescription>Zarządzaj obrazami używanymi na stronie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImageUpload}
            multiple
            accept="image/*"
            className="hidden"
          />
          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Przeciągnij obrazy tutaj lub kliknij aby wybrać</p>
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            {isUploading ? 'Przesyłanie...' : 'Wybierz obrazy'}
          </Button>
        </div>

        {uploadedImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Uploaded image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onRemoveImage(imageUrl)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
