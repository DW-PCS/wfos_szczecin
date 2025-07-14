import { getIconComponent } from "../icons";

interface BenefitCardIconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BenefitCardIcon({
  icon,
  size = 'md',
  className = 'w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center mr-4',
}: BenefitCardIconProps) {
  const IconComponent = getIconComponent(icon);

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={className}>
      <IconComponent className={`${iconSizes[size]} text-primary-green`} />
    </div>
  );
}
