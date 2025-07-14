import { HeroSettings, HeroSlide } from '@/types/hero';
import { HeroContent } from './hero-content';

interface HeroContentWrapperProps {
  slideData: HeroSlide;
  settings: HeroSettings;
  currentSlide: number;
  hasMultipleSlides: boolean;
}

export function HeroContentWrapper({
  slideData,
  settings,
  currentSlide,
  hasMultipleSlides,
}: HeroContentWrapperProps) {
  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="relative">
            <div
              className="transition-all duration-800 ease-in-out opacity-100"
              key={currentSlide}
              role={hasMultipleSlides ? 'tabpanel' : undefined}
              aria-label={hasMultipleSlides ? `Slajd ${currentSlide + 1}` : undefined}
            >
              <HeroContent
                title={slideData.title}
                subtitle={slideData.subtitle}
                primaryButtonText={slideData.buttonText}
                primaryButtonUrl={slideData.buttonUrl}
                secondaryButtonText="Dowiedz się więcej"
                secondaryButtonUrl="/o-nas"
                hasBackgroundImage={!!(slideData.image || settings.heroImage)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
