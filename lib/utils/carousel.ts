export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getItemsPerSlide = (): number => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3; // lg and up: 3 items
    if (window.innerWidth >= 768) return 2; // md to lg: 2 items
    return 1; // sm and down: 1 item
  }
  return 3; // default for SSR
};

export const calculateTotalSlides = (totalItems: number, itemsPerSlide: number): number => {
  return Math.ceil(totalItems / itemsPerSlide);
};

// components/pages/home/news-showcase/constants.ts
export const RESPONSIVE_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
} as const;

export const DEFAULT_ITEMS_PER_SLIDE = {
  sm: 1,
  md: 2,
  lg: 3,
} as const;

export const CATEGORY_COLORS = {
  'Programy dofinansowania': 'bg-primary-green',
  Biuletyn: 'bg-primary-blue',
  'Aktualności prawne': 'bg-blue-600',
  Informacje: 'bg-gray-600',
  default: 'bg-primary-navy',
} as const;

export const ANIMATION_DURATION = 500;
export const DEFAULT_NEWS_LIMIT = 6;
