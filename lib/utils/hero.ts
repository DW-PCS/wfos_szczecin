import { HeroSettings, HeroSlide } from '@/types/hero';

export const getBackgroundStyle = (slideData: HeroSlide, settings: HeroSettings) => {
  const imageUrl = slideData.image || settings.heroImage;

  if (imageUrl) {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  }

  return {};
};

export const getSectionClasses = (slideData: HeroSlide, settings: HeroSettings): string => {
  const baseClasses =
    'py-16 sm:py-20 lg:py-32 min-h-[calc(55vh+0.3rem)] md:min-h-0 md:h-auto lg:h-[535px] flex items-center relative overflow-hidden transition-all duration-1000 ease-in-out';

  const hasBackgroundImage = slideData.image || settings.heroImage;

  if (hasBackgroundImage) {
    return baseClasses;
  }

  return `${baseClasses} bg-gradient-to-br from-blue-50 to-green-50`;
};

export const isSlideValid = (slide: HeroSlide): boolean => {
  return slide.isActive && !!slide.title && !!slide.subtitle;
};

export const getActiveSlides = (slides: HeroSlide[]): HeroSlide[] => {
  return slides.filter(isSlideValid);
};

export const shouldShowSlider = (slides: HeroSlide[], sliderEnabled: boolean): boolean => {
  return getActiveSlides(slides).length > 1 && sliderEnabled;
};
