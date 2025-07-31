export interface HeroSection {
  title: string;
  backgroundImage: string;
}

export interface IntroSection {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface MissionVisionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  active: boolean;
  gradient: string;
  order: number;
}

export interface Achievement {
  id: number;
  number: string;
  label: string;
  icon: string;
  placement: string;
  active: boolean;
  order: number;
  color?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Person {
  id: number;
  name: string;
  role: string;
  description?: string;
  order: number;
  active: boolean;
}

export interface Team {
  id: number;
  name: string;
  description: string;
  icon: string;
  order: number;
  active: boolean;
}

export interface CtaSection {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface AboutContent {
  hero: HeroSection;
  intro: IntroSection;
  missionVision: MissionVisionItem[];
  achievements: Achievement[];
  managementBoard: Person[];
  supervisoryBoard: Person[];
  teams: Team[];
  cta: CtaSection;
  active: boolean;
  updatedAt: Date | string;
  createdAt: Date | string;
}
export type AboutTabValue = 'hero' | 'intro' | 'mission' | 'stats' | 'structure' | 'teams' | 'cta';
