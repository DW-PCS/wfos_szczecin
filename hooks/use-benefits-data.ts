import { getBenefitsByCategoryWithFallback } from '@/lib/utils/benefits';
import { BenefitsData } from '@/types/benefits';
import { useMemo } from 'react';

export function useBenefitsData(getBenefitsByCategory: (category: string) => any[]): BenefitsData {
  const benefitsData = useMemo(
    () => ({
      financial: getBenefitsByCategoryWithFallback(getBenefitsByCategory, 'financial'),
      organizational: getBenefitsByCategoryWithFallback(getBenefitsByCategory, 'organizational'),
      environmental: getBenefitsByCategoryWithFallback(getBenefitsByCategory, 'environmental'),
    }),
    [getBenefitsByCategory]
  );

  return benefitsData;
}
