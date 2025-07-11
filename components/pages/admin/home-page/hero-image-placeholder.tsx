import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

interface HeroImagePlaceholderProps {
  onSelectImage: () => void;
}

export function HeroImagePlaceholder({ onSelectImage }: HeroImagePlaceholderProps) {
  return (
    <>
      <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600 mb-2">Przeciągnij obraz tutaj lub kliknij aby wybrać</p>
      <p className="text-sm text-gray-500 mb-4">Obraz będzie używany jako tło sekcji hero</p>
      <Button type="button" variant="outline" className="cursor-pointer" onClick={onSelectImage}>
        <ImageIcon className="h-4 w-4 mr-2" />
        Wybierz obraz
      </Button>
    </>
  );
}
