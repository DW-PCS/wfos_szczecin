interface HeroScreenReaderContentProps {
  hasMultipleSlides: boolean;
  currentSlide: number;
  totalSlides: number;
  slideTitle: string;
}

export function HeroScreenReaderContent({
  hasMultipleSlides,
  currentSlide,
  totalSlides,
  slideTitle,
}: HeroScreenReaderContentProps) {
  if (!hasMultipleSlides) return null;

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      {`Slajd ${currentSlide + 1} z ${totalSlides}: ${slideTitle}`}
    </div>
  );
}
