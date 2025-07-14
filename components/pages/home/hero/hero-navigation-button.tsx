import { LucideIcon } from 'lucide-react';

interface HeroNavigationButtonProps {
  direction: 'previous' | 'next';
  onClick: () => void;
  currentSlide: number;
  totalSlides: number;
  icon: LucideIcon;
}

export function HeroNavigationButton({
  direction,
  onClick,
  currentSlide,
  totalSlides,
  icon: Icon,
}: HeroNavigationButtonProps) {
  const isPrevious = direction === 'previous';
  const positionClasses = isPrevious ? 'left-4' : 'right-4';
  const ariaLabel = isPrevious
    ? `Poprzedni slajd. Obecnie wyświetlany slajd ${currentSlide + 1} z ${totalSlides}`
    : `Następny slajd. Obecnie wyświetlany slajd ${currentSlide + 1} z ${totalSlides}`;

  return (
    <button
      onClick={onClick}
      className={`hidden lg:flex absolute ${positionClasses} top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg items-center justify-center`}
      aria-label={ariaLabel}
    >
      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
    </button>
  );
}
