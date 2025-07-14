import { LucideIcon } from 'lucide-react';

interface CarouselArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  icon: LucideIcon;
}

export function CarouselArrow({ direction, onClick, icon: Icon }: CarouselArrowProps) {
  const positionClasses = direction === 'left' ? 'left-0 -translate-x-7' : 'right-0 translate-x-7';

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex absolute ${positionClasses} top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 group`}
    >
      <Icon className="h-6 w-6 text-gray-600 group-hover:text-primary-navy transition-colors" />
    </button>
  );
}
