export interface HeroSettings {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  heroImage?: string;
  sliderEnabled?: boolean;
  showNavigation?: boolean;
  showIndicators?: boolean;
  autoPlayInterval?: number;
  slides: HeroSlide[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  image?: string;
  isActive: boolean;
  order?: number;
}

export interface PopupSettings {
  active: boolean;
  title: string;
  content: string;
  image: string;
  showFrom?: Date;
  showUntil?: Date;
  showOnce: boolean;
  popupImage?: string;
}

export interface StatsSettings {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  boxes: StatsBox[];
}

export interface StatsBox {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  isActive: boolean;
  order: number;
}

export type HomeTabValue = 'content' | 'slider' | 'slider-settings' | 'stats-section' | 'popup';
