import { Benefit } from "@/types/benefits";
import { BenefitCard } from "./card/benefit-card";


interface BenefitsGridProps {
  benefits: Benefit[];
  gridCols?: string;
  className?: string;
}

export function BenefitsGrid({
  benefits,
  gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  className,
}: BenefitsGridProps) {
  const gridClasses = `grid ${gridCols} gap-8`;
  const finalClassName = className ? `${gridClasses} ${className}` : gridClasses;

  return (
    <div className={finalClassName}>
      {benefits.map(benefit => (
        <BenefitCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
}
