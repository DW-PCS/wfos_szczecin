import { HeroSettings, HeroSlide, SliderState } from '@/types/hero';
import { useCallback, useEffect, useState } from 'react';

export function useHeroSlider(activeSlides: HeroSlide[], settings: HeroSettings): SliderState {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const hasMultipleSlides = activeSlides.length > 1 && settings.sliderEnabled;

  const nextSlide = useCallback(() => {
    if (hasMultipleSlides) {
      setCurrentSlide(prev => (prev + 1) % activeSlides.length);
    }
  }, [hasMultipleSlides, activeSlides.length]);

  const prevSlide = useCallback(() => {
    if (hasMultipleSlides) {
      setCurrentSlide(prev => (prev - 1 + activeSlides.length) % activeSlides.length);
    }
  }, [hasMultipleSlides, activeSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (hasMultipleSlides && isAutoPlaying && settings.autoPlayInterval > 0) {
      const interval = setInterval(nextSlide, settings.autoPlayInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleSlides, isAutoPlaying, settings.autoPlayInterval, nextSlide]);

  useEffect(() => {
    if (currentSlide >= activeSlides.length) {
      setCurrentSlide(0);
    }
  }, [activeSlides.length, currentSlide]);

  return {
    currentSlide,
    isAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
  };
}
