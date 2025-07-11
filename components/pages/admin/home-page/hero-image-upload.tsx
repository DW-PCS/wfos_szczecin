import { Label } from '@/components/ui/label';
import { HeroImagePlaceholder } from './hero-image-placeholder';
import { HeroImagePreview } from './hero-image-preview';

interface HeroImageUploadProps {
  heroImage?: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  onRemoveImage: () => void;
  imageRef: React.RefObject<HTMLInputElement | null>;
}

export function HeroImageUpload({
  heroImage,
  onImageUpload,
  onRemoveImage,
  imageRef,
}: HeroImageUploadProps) {
  return (
    <div className="space-y-2">
      <Label>Obraz tła sekcji hero (opcjonalnie)</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={imageRef}
          onChange={onImageUpload}
          accept="image/*"
          className="hidden"
        />
        {heroImage ? (
          <HeroImagePreview
            heroImage={heroImage}
            onChangeImage={() => imageRef.current?.click()}
            onRemoveImage={onRemoveImage}
          />
        ) : (
          <HeroImagePlaceholder onSelectImage={() => imageRef.current?.click()} />
        )}
      </div>
    </div>
  );
}
