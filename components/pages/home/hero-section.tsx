'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { defaultHeroSettings } from '@/constants/hero';
import { HeroContent } from './hero-content';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  buttonText: string;
  buttonUrl: string;
  isActive: boolean;
}

const HeroSection = React.memo(function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSlides = defaultHeroSettings.slides.filter(slide => slide.isActive);
  const hasMultipleSlides = activeSlides.length > 1 && defaultHeroSettings.sliderEnabled;

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

  useEffect(() => {
    if (hasMultipleSlides && isAutoPlaying && defaultHeroSettings.autoPlayInterval > 0) {
      const interval = setInterval(nextSlide, defaultHeroSettings.autoPlayInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleSlides, isAutoPlaying, defaultHeroSettings.autoPlayInterval, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getCurrentSlideData = (): HeroSlide => {
    if (hasMultipleSlides && activeSlides[currentSlide]) {
      return activeSlides[currentSlide];
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

  // Determine background style
  const backgroundStyle = currentSlideData.image
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${currentSlideData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : defaultHeroSettings.heroImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${defaultHeroSettings.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  const sectionClasses =
    currentSlideData.image || defaultHeroSettings.heroImage
      ? 'py-16 sm:py-20 lg:py-32 min-h-[calc(55vh+0.3rem)] md:min-h-0 md:h-auto lg:h-[535px] flex items-center relative overflow-hidden transition-all duration-1000 ease-in-out'
      : 'py-16 sm:py-20 lg:py-32 min-h-[calc(55vh+0.3rem)] md:min-h-0 md:h-auto lg:h-[535px] flex items-center bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden transition-all duration-1000 ease-in-out';

  return (
    <section
      className={sectionClasses}
      style={backgroundStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Sekcja główna strony"
      role="banner"
    >
      {/* Screen reader only content for current slide */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {hasMultipleSlides &&
          `Slajd ${currentSlide + 1} z ${activeSlides.length}: ${currentSlideData.title}`}
      </div>

      {/* Slider content */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            {/* Slide transition container */}
            <div className="relative">
              <div
                className="transition-all duration-800 ease-in-out opacity-100"
                key={currentSlide}
                role={hasMultipleSlides ? 'tabpanel' : undefined}
                aria-label={hasMultipleSlides ? `Slajd ${currentSlide + 1}` : undefined}
              >
                <HeroContent
                  title={currentSlideData.title}
                  subtitle={currentSlideData.subtitle}
                  primaryButtonText={currentSlideData.buttonText}
                  primaryButtonUrl={currentSlideData.buttonUrl}
                  secondaryButtonText="Dowiedz się więcej"
                  secondaryButtonUrl="/o-nas"
                  hasBackgroundImage={!!(currentSlideData.image || defaultHeroSettings.heroImage)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows - Desktop only */}
      {hasMultipleSlides && defaultHeroSettings.showNavigation && (
        <div role="group" aria-label="Nawigacja slajdów">
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg items-center justify-center"
            aria-label={`Poprzedni slajd. Obecnie wyświetlany slajd ${currentSlide + 1} z ${
              activeSlides.length
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg items-center justify-center"
            aria-label={`Następny slajd. Obecnie wyświetlany slajd ${currentSlide + 1} z ${
              activeSlides.length
            }`}
          >
            <ChevronRight className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Slide indicators */}
      {hasMultipleSlides && defaultHeroSettings.showIndicators && (
        <div
          className="absolute bottom-6 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
          role="tablist"
          aria-label="Wskaźniki slajdów"
        >
          <div className="flex space-x-2">
            {activeSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-in-out ${
                  currentSlide === index
                    ? 'bg-white scale-110 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Przejdź do slajdu ${index + 1}: ${slide.title}`}
                tabIndex={currentSlide === index ? 0 : -1}
              />
            ))}
          </div>
        </div>
      )}

      {/* Progress bar (optional) */}
      {hasMultipleSlides && defaultHeroSettings.autoPlayInterval > 0 && isAutoPlaying && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
          role="progressbar"
          aria-label="Postęp automatycznego przewijania slajdów"
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={activeSlides.length}
        >
          <div
            className="h-full bg-primary-green transition-all duration-300 ease-in-out"
            style={{
              width: `${((currentSlide + 1) / activeSlides.length) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  );
});

export default HeroSection;
