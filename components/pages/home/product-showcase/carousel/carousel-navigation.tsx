import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselArrow } from './carousel-arrow';

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  totalSlides: number;
}

export function CarouselNavigation({ onPrevious, onNext, totalSlides }: CarouselNavigationProps) {
  if (totalSlides <= 1) return null;

  return (
    <>
      <CarouselArrow direction="left" onClick={onPrevious} icon={ChevronLeft} />

      <CarouselArrow direction="right" onClick={onNext} icon={ChevronRight} />
    </>
  );
}
