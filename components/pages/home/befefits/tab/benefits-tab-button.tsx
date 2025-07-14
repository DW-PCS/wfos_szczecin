import { BenefitCategory } from '@/types/benefits';

interface BenefitsTabButtonProps {
  category: BenefitCategory;
  isActive: boolean;
  onClick: () => void;
}

export function BenefitsTabButton({ category, isActive, onClick }: BenefitsTabButtonProps) {
  const baseClasses =
    'px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer';
  const activeClasses = 'bg-primary-green text-white shadow-md';
  const inactiveClasses = 'bg-white text-gray-700 hover:bg-gray-100';

  const buttonClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      aria-pressed={isActive}
      role="tab"
      aria-selected={isActive}
    >
      {category.label}
    </button>
  );
}
