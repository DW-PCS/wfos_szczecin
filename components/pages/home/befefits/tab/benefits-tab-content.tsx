import { BenefitsData } from '@/types/benefits';
import { BenefitsTab } from './benefits-tab';

interface BenefitsTabContentProps {
  activeTab: string;
  benefitsData: BenefitsData;
}

export function BenefitsTabContent({ activeTab, benefitsData }: BenefitsTabContentProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <BenefitsTab
        category="financial"
        title="Korzyści Finansowe"
        benefits={benefitsData.financial}
        isActive={activeTab === 'financial'}
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />

      <BenefitsTab
        category="organizational"
        title="Korzyści Organizacyjne"
        benefits={benefitsData.organizational}
        isActive={activeTab === 'organizational'}
        gridCols="grid-cols-1 md:grid-cols-2"
      />

      <BenefitsTab
        category="environmental"
        title="Korzyści Środowiskowe"
        benefits={benefitsData.environmental}
        isActive={activeTab === 'environmental'}
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  );
}
