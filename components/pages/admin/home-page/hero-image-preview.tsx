import { Button } from '@/components/ui/button';
import { ImageIcon, X } from 'lucide-react';

interface HeroImagePreviewProps {
  heroImage: string;
  onChangeImage: () => void;
  onRemoveImage: () => void;
}

export function HeroImagePreview({
  heroImage,
  onChangeImage,
  onRemoveImage,
}: HeroImagePreviewProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero background preview"
          className="max-w-full h-48 object-cover rounded-lg mx-auto"
        />
      </div>
      <div className="flex gap-2 justify-center">
        <Button type="button" variant="outline" onClick={onChangeImage}>
          <ImageIcon className="h-4 w-4 mr-2" />
          Zmień obraz
        </Button>
        <Button type="button" variant="outline" onClick={onRemoveImage}>
          <X className="h-4 w-4 mr-2" />
          Usuń obraz
        </Button>
      </div>
    </div>
  );
}
