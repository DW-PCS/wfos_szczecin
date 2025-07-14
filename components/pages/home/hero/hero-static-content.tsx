import { HeroSettings, HeroSlide } from '@/types/hero';
import React from 'react';
import { HeroContainer } from './hero-container';


interface HeroStaticContentProps {
  slideData: HeroSlide;
  settings: HeroSettings;
}

export function HeroStaticContent({ slideData, settings }: HeroStaticContentProps) {
  return (
    <HeroContainer slideData={slideData} settings={settings}>
      {/* No navigation, indicators, or progress bar for static content */}
    </HeroContainer>
  );
}
