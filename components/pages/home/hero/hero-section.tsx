'use client';

import { defaultHeroSettings } from '@/constants/hero';
import { useHeroSlider } from '@/hooks/use-hero-slider';
import { HeroSlide } from '@/types/hero';
import React from 'react';
import { HeroSlider } from './hero-slider';
import { HeroStaticContent } from './hero-static-content';

const HeroSection = React.memo(function HeroSection() {
  const activeSlides = defaultHeroSettings.slides.filter(slide => slide.isActive);
  const hasMultipleSlides = activeSlides.length > 1 && defaultHeroSettings.sliderEnabled;

  const sliderState = useHeroSlider(activeSlides, defaultHeroSettings);

  const getCurrentSlideData = (): HeroSlide => {
    if (hasMultipleSlides && activeSlides[sliderState.currentSlide]) {
      return activeSlides[sliderState.currentSlide];
    }

    return (
      activeSlides[0] || {
        id: 'default',
        title: defaultHeroSettings.title,
        subtitle: defaultHeroSettings.subtitle,
        buttonText: 'Sprawdź programy',
        buttonUrl: '/programy',
        isActive: true,
      }
    );
  };

  const currentSlideData = getCurrentSlideData();

  return hasMultipleSlides ? (
    <HeroSlider
      slides={activeSlides}
      currentSlideData={currentSlideData}
      sliderState={sliderState}
      settings={defaultHeroSettings}
    />
  ) : (
    <HeroStaticContent slideData={currentSlideData} settings={defaultHeroSettings} />
  );
});

export default HeroSection;
