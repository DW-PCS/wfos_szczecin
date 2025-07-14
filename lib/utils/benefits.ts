import { Benefit } from '@/types/benefits';

export const getBenefitsByCategory = (benefits: Benefit[], category: string): Benefit[] => {
  return benefits
    .filter(benefit => benefit.category === category && benefit.isActive)
    .sort((a, b) => a.order - b.order);
};

export const getActiveBenefits = (benefits: Benefit[]): Benefit[] => {
  return benefits.filter(benefit => benefit.isActive);
};

export const sortBenefitsByOrder = (benefits: Benefit[]): Benefit[] => {
  return [...benefits].sort((a, b) => a.order - b.order);
};

export const validateBenefit = (benefit: Benefit): boolean => {
  return !!(
    benefit.title?.trim() &&
    benefit.description?.trim() &&
    benefit.icon &&
    benefit.category
  );
};

export const getCategoryGridConfig = (category: string): string => {
  const configs = {
    financial: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    organizational: 'grid-cols-1 md:grid-cols-2',
    environmental: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return configs[category as keyof typeof configs] || configs.financial;
};

export const getBenefitsByCategoryWithFallback = (
  getBenefitsByCategory: (category: string) => Benefit[],
  category: string
): Benefit[] => {
  try {
    return getBenefitsByCategory(category);
  } catch (error) {
    console.warn(`Failed to get benefits for category: ${category}`, error);
    return [];
  }
};
