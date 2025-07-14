import { CarouselIndicator } from './carousel-indicator';

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
}

export function CarouselIndicators({
  totalSlides,
  currentSlide,
  onSlideSelect,
}: CarouselIndicatorsProps) {
  if (totalSlides <= 1) return null;

  return (
    <div className="flex justify-center space-x-2 mb-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <CarouselIndicator
          key={index}
          index={index}
          isActive={index === currentSlide}
          onClick={() => onSlideSelect(index)}
        />
      ))}
    </div>
  );
}
