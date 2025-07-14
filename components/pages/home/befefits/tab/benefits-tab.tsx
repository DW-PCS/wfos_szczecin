import { Benefit } from '@/types/benefits';
import { BenefitsGrid } from '../benefits-grid';

interface BenefitsTabProps {
  category: string;
  title: string;
  benefits: Benefit[];
  isActive: boolean;
  gridCols?: string;
}

export function BenefitsTab({
  category,
  title,
  benefits,
  isActive,
  gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
}: BenefitsTabProps) {
  if (!isActive) return null;

  return (
    <div role="tabpanel" aria-labelledby={`tab-${category}`}>
      <h3 className="text-2xl font-semibold text-primary-green mb-8 text-center">{title}</h3>
      <BenefitsGrid benefits={benefits} gridCols={gridCols} />
    </div>
  );
}
