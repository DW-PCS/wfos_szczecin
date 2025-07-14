import { Benefit } from '@/types/benefits';
import { BenefitCardIcon } from './benefit-card-icon';
import { BenefitCardContent } from './benefit-card-content';

interface BenefitCardProps {
  benefit: Benefit;
  className?: string;
}

export function BenefitCard({
  benefit,
  className = 'bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100 hover:border-primary-green/30',
}: BenefitCardProps) {
  return (
    <div className={className}>
      <div className="flex items-center mb-4">
        <BenefitCardIcon icon={benefit.icon} />
        <BenefitCardContent
          title={benefit.title}
          description={benefit.description}
          showTitle={true}
        />
      </div>
      <BenefitCardContent
        title={benefit.title}
        description={benefit.description}
        showTitle={false}
      />
    </div>
  );
}
