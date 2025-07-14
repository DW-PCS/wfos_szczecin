export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  buttonText: string;
  buttonUrl: string;
  isActive: boolean;
}

export interface HeroSettings {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  heroImage?: string;
  slides: HeroSlide[];
  sliderEnabled: boolean;
  autoPlayInterval: number;
  showNavigation: boolean;
  showIndicators: boolean;
}

export interface SliderState {
  currentSlide: number;
  isAutoPlaying: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
