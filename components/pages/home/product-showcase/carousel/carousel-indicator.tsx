interface CarouselIndicatorProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function CarouselIndicator({ isActive, onClick }: CarouselIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        isActive ? 'bg-primary-navy scale-125' : 'bg-gray-300 hover:bg-gray-400'
      }`}
    />
  );
}
