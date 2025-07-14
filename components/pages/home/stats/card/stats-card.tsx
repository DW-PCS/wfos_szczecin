import { StatsBox } from '@/types/stats';
import { StatsCardContent } from './stats-card-content';
import { StatsCardIcon } from './stats-card-icon';

interface StatsCardProps {
  box: StatsBox;
  className?: string;
}

export function StatsCard({
  box,
  className = 'bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mx-2 sm:mx-0',
}: StatsCardProps) {
  return (
    <div className={className}>
      <div className="text-center">
        <StatsCardIcon
          icon={box.icon}
          backgroundColor={box.backgroundColor}
          iconColor={box.iconColor}
        />
        <StatsCardContent title={box.title} description={box.description} />
      </div>
    </div>
  );
}
