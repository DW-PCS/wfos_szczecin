import { StatsSectionSettings } from '@/types/stats';

export const STATS_ANIMATION = {
  FADE_IN_DURATION: 600,
  STAGGER_DELAY: 100,
  HOVER_SCALE: 1.05,
} as const;

export const STATS_BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

export const DEFAULT_STATS_SETTINGS = {
  title: 'Nasze Osiągnięcia',
  subtitle: 'Poznaj nasze sukcesy w liczbach',
  backgroundImage: '/placeholder.svg',
  overlayOpacity: 0.4,
} as const;

export const GRID_CONFIGURATIONS = {
  SINGLE: 'grid-cols-1 max-w-2xl',
  DOUBLE: 'grid-cols-1 md:grid-cols-2',
  TRIPLE: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  QUAD: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4',
} as const;

export const defaultSettings: StatsSectionSettings = {
  title: 'Ochrona Środowiska w Praktyce',
  subtitle: 'Wspieramy inicjatywy ekologiczne i zrównoważony rozwój w całym regionie',
  backgroundImage: '/placeholder.svg?height=600&width=1200',
  boxes: [
    {
      id: '1',
      title: 'Czysta Energia',
      description: 'Wspieramy projekty odnawialnych źródeł energii i efektywności energetycznej',
      icon: 'energy',
      iconColor: 'text-white',
      backgroundColor: 'bg-primary-green',
      isActive: true,
      order: 1,
    },
    {
      id: '2',
      title: 'Ochrona Przyrody',
      description: 'Finansujemy inicjatywy mające na celu ochronę bioróżnorodności i ekosystemów',
      icon: 'heart',
      iconColor: 'text-primary-navy',
      backgroundColor: 'bg-primary-lime',
      isActive: true,
      order: 2,
    },
  ],
};
