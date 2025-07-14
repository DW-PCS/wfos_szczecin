

import { CarouselState } from '@/constants';
import { Article } from '@/types/news';
import { CarouselNavigation } from './carousel-navigation';
import { NewsGrid } from '../news-grid';
import { CarouselIndicators } from './carousel-indicators';

interface NewsCarouselProps {
  news: Article[];
  hasHydrated: boolean;
  carouselState: CarouselState;
}

export function NewsCarousel({ news, hasHydrated, carouselState }: NewsCarouselProps) {
  const { currentSlide, totalSlides, nextSlide, prevSlide, goToSlide } = carouselState;

  return (
    <div className="relative">
      <CarouselNavigation onPrevious={prevSlide} onNext={nextSlide} totalSlides={totalSlides} />

      <NewsGrid news={news} hasHydrated={hasHydrated} carouselState={carouselState} />

      <CarouselIndicators
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
      />
    </div>
  );
}
