import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImageIcon, X } from 'lucide-react';

interface PopupImageUploadProps {
  image: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  onRemoveImage: () => void;
  imageRef: React.RefObject<HTMLInputElement | null>;
}

export function PopupImageUpload({
  image,
  onImageUpload,
  onRemoveImage,
  imageRef,
}: PopupImageUploadProps) {
  return (
    <div className="space-y-2">
      <Label>Grafika popupu (opcjonalnie)</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={imageRef}
          onChange={onImageUpload}
          accept="image/*"
          className="hidden"
        />
        <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Przeciągnij grafikę tutaj lub kliknij aby wybrać</p>
        <Button
          type="button"
          className="cursor-pointer"
          variant="outline"
          onClick={() => imageRef.current?.click()}
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Wybierz grafikę
        </Button>
        {image && (
          <div className="mt-4 p-2 bg-gray-50 rounded flex items-center justify-between">
            <span className="text-sm">{image}</span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="cursor-pointer"
              onClick={onRemoveImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
