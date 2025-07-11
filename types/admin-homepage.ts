export interface HeroSettings {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  heroImage?: string;
}

export interface PopupSettings {
  active: boolean;
  title: string;
  content: string;
  image: string;
  showFrom?: Date;
  showUntil?: Date;
  showOnce: boolean;
}
