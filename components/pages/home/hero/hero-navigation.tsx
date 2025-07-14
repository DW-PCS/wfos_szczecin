import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroNavigationButton } from './hero-navigation-button';

interface HeroNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  showNavigation: boolean;
}

export function HeroNavigation({
  onPrevious,
  onNext,
  currentSlide,
  totalSlides,
  showNavigation,
}: HeroNavigationProps) {
  if (!showNavigation) return null;

  return (
    <div role="group" aria-label="Nawigacja slajdów">
      <HeroNavigationButton
        direction="previous"
        onClick={onPrevious}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        icon={ChevronLeft}
      />

      <HeroNavigationButton
        direction="next"
        onClick={onNext}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        icon={ChevronRight}
      />
    </div>
  );
}
