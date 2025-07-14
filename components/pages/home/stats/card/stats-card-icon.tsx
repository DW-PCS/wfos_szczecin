import { getIconComponent } from "./stats-icons";

interface StatsCardIconProps {
  icon: string;
  backgroundColor: string;
  iconColor: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatsCardIcon({
  icon,
  backgroundColor,
  iconColor,
  size = 'md',
}: StatsCardIconProps) {
  const IconComponent = getIconComponent(icon);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-18 h-18 sm:w-20 sm:h-20',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${backgroundColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
    >
      <div className={iconColor}>{IconComponent}</div>
    </div>
  );
}
