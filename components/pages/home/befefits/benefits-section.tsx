'use client';

import { BenefitsCallToAction } from './benefits-call-to-action';
import { BenefitsSectionHeader } from './benefits-section-header';
import { BenefitsTabContent } from './tab/benefits-tab-content';

import { initialBenefits } from '@/constants/benefits';
import { getBenefitsByCategory } from '@/lib/utils/benefits';
import { useState } from 'react';
import { BenefitsTabNavigation } from './tab/benefits-tab-navigation';

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState('financial');

  const benefitsData = {
    financial: getBenefitsByCategory(initialBenefits, 'financial'),
    organizational: getBenefitsByCategory(initialBenefits, 'organizational'),
    environmental: getBenefitsByCategory(initialBenefits, 'environmental'),
  };

  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(to bottom, #f3f4f6, rgb(245 243 240))' }}
    >
      <div className="container mx-auto px-4">
        <BenefitsSectionHeader />
        <BenefitsTabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <BenefitsTabContent activeTab={activeTab} benefitsData={benefitsData} />
        <BenefitsCallToAction />
      </div>
    </section>
  );
}
