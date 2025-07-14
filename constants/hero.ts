import { HeroSettings } from '@/types/hero';

export const defaultHeroSettings: HeroSettings = {
  title: 'Wojewódzki Fundusz Ochrony Środowiska',
  subtitle: 'Wspieramy projekty ekologiczne w województwie zachodniopomorskim',
  searchPlaceholder: 'Szukaj programów...',
  heroImage: undefined,
  slides: [
    {
      id: '1',
      title: 'Wojewódzki Fundusz Ochrony Środowiska',
      subtitle: 'Wspieramy projekty ekologiczne w województwie zachodniopomorskim',
      image: undefined,
      buttonText: 'Sprawdź programy',
      buttonUrl: '/programy',
      isActive: true,
    },
  ],
  sliderEnabled: false,
  autoPlayInterval: 5,
  showNavigation: true,
  showIndicators: true,
};
