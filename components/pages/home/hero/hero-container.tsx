import React from 'react';
import { HeroContent } from './hero-content';
import { HeroSettings, HeroSlide } from '@/types/hero';
import { HeroScreenReaderContent } from './hero-screen-reader-content';
import { HeroContentWrapper } from './hero-content-wrapper';
import { getBackgroundStyle, getSectionClasses } from '@/lib/utils/hero';

interface HeroContainerProps {
  slideData: HeroSlide;
  settings: HeroSettings;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  currentSlide?: number;
  totalSlides?: number;
}

export function HeroContainer({
  slideData,
  settings,
  children,
  onMouseEnter,
  onMouseLeave,
  currentSlide = 0,
  totalSlides = 1,
}: HeroContainerProps) {
  const backgroundStyle = getBackgroundStyle(slideData, settings);
  const sectionClasses = getSectionClasses(slideData, settings);
  const hasMultipleSlides = totalSlides > 1;

  return (
    <section
      className={sectionClasses}
      style={backgroundStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label="Sekcja główna strony"
      role="banner"
    >
      <HeroScreenReaderContent
        hasMultipleSlides={hasMultipleSlides}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideTitle={slideData.title}
      />

      <HeroContentWrapper
        slideData={slideData}
        settings={settings}
        currentSlide={currentSlide}
        hasMultipleSlides={hasMultipleSlides}
      />

      {children}
    </section>
  );
}
