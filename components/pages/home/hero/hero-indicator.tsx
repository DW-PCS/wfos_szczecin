import { HeroSlide } from "@/types/hero";

interface HeroIndicatorProps {
  index: number;
  slide: HeroSlide;
  isActive: boolean;
  onClick: () => void;
}

export function HeroIndicator({ index, slide, isActive, onClick }: HeroIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-in-out ${
        isActive ? 'bg-white scale-110 shadow-lg' : 'bg-white/50 hover:bg-white/70'
      }`}
      role="tab"
      aria-selected={isActive}
      aria-label={`Przejdź do slajdu ${index + 1}: ${slide.title}`}
      tabIndex={isActive ? 0 : -1}
    />
  );
}
