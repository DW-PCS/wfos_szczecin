import { BenefitCategory } from '@/types/benefits';
import { BenefitsTabButton } from './benefits-tab-button';
import { BENEFIT_CATEGORIES } from '@/constants/benefits';

interface BenefitsTabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  categories?: BenefitCategory[];
}

export function BenefitsTabNavigation({
  activeTab,
  onTabChange,
  categories = BENEFIT_CATEGORIES,
}: BenefitsTabNavigationProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map(category => (
        <BenefitsTabButton
          key={category.id}
          category={category}
          isActive={activeTab === category.id}
          onClick={() => onTabChange(category.id)}
        />
      ))}
    </div>
  );
}
