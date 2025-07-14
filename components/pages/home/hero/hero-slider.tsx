
import { HeroSettings, HeroSlide, SliderState } from '@/types/hero';
import { HeroContainer } from './hero-container';
import { HeroIndicators } from './hero-indicators';
import { HeroNavigation } from './hero-navigation';
import { HeroProgressBar } from './hero-progress-bar';

interface HeroSliderProps {
  slides: HeroSlide[];
  currentSlideData: HeroSlide;
  sliderState: SliderState;
  settings: HeroSettings;
}

export function HeroSlider({ slides, currentSlideData, sliderState, settings }: HeroSliderProps) {
  const {
    currentSlide,
    isAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
  } = sliderState;

  return (
    <HeroContainer
      slideData={currentSlideData}
      settings={settings}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      currentSlide={currentSlide}
      totalSlides={slides.length}
    >
      <HeroNavigation
        onPrevious={prevSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        showNavigation={settings.showNavigation}
      />

      <HeroIndicators
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
        showIndicators={settings.showIndicators}
      />

      <HeroProgressBar
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isAutoPlaying={isAutoPlaying}
        autoPlayInterval={settings.autoPlayInterval}
      />
    </HeroContainer>
  );
}
