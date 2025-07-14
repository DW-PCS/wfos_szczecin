import { HeroSlide } from "@/types/hero";
import { HeroIndicator } from "./hero-indicator";

interface HeroIndicatorsProps {
  slides: HeroSlide[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  showIndicators: boolean;
}

export function HeroIndicators({
  slides,
  currentSlide,
  onSlideSelect,
  showIndicators,
}: HeroIndicatorsProps) {
  if (!showIndicators) return null;

  return (
    <div
      className="absolute bottom-6 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
      role="tablist"
      aria-label="Wskaźniki slajdów"
    >
      <div className="flex space-x-2">
        {slides.map((slide, index) => (
          <HeroIndicator
            key={slide.id}
            index={index}
            slide={slide}
            isActive={currentSlide === index}
            onClick={() => onSlideSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
