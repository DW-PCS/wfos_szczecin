import { GridConfig, StatsBox } from '@/types/stats';
import { StatsCard } from './card/stats-card';

interface StatsGridProps {
  boxes: StatsBox[];
  gridConfig: GridConfig;
  className?: string;
}

export function StatsGrid({ boxes, gridConfig, className }: StatsGridProps) {
  const gridClasses = `grid gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0 ${gridConfig.classes}`;
  const finalClassName = className ? `${gridClasses} ${className}` : gridClasses;

  return (
    <div className={finalClassName}>
      {boxes.map(box => (
        <StatsCard key={box.id} box={box} />
      ))}
    </div>
  );
}
