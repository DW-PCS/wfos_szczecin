interface HeroProgressBarProps {
  currentSlide: number;
  totalSlides: number;
  isAutoPlaying: boolean;
  autoPlayInterval: number;
}

export function HeroProgressBar({
  currentSlide,
  totalSlides,
  isAutoPlaying,
  autoPlayInterval,
}: HeroProgressBarProps) {
  if (autoPlayInterval <= 0 || !isAutoPlaying) return null;

  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
      role="progressbar"
      aria-label="Postęp automatycznego przewijania slajdów"
      aria-valuenow={currentSlide + 1}
      aria-valuemin={1}
      aria-valuemax={totalSlides}
    >
      <div
        className="h-full bg-primary-green transition-all duration-300 ease-in-out"
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  );
}
