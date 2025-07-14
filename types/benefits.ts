export interface Benefit {
  id: string | number;
  title: string;
  description: string;
  icon: string;
  category: 'financial' | 'organizational' | 'environmental';
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface BenefitCategory {
  id: string;
  label: string;
  description: string;
  gridCols: string;
}

export interface BenefitsData {
  financial: Benefit[];
  organizational: Benefit[];
  environmental: Benefit[];
}

export interface BenefitsSettings {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  benefits: Benefit[];
}
