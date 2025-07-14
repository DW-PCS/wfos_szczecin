import { CarouselState } from '@/constants';
import { Article } from '@/types/news';
import { NewsCardSkeleton } from './card/news-card-skeleton';
import { NewsCard } from './card/news-card';


interface NewsGridProps {
  news: Article[];
  hasHydrated: boolean;
  carouselState: CarouselState;
}

export function NewsGrid({ news, hasHydrated, carouselState }: NewsGridProps) {
  const getCurrentNews = () => {
    const { currentSlide, itemsPerSlide } = carouselState;
    const startIndex = currentSlide * itemsPerSlide;
    return news.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mb-12 transition-all duration-500">
      {!hasHydrated
        ? Array.from({ length: 3 }).map((_, index) => <NewsCardSkeleton key={index} />)
        : getCurrentNews().map(article => <NewsCard key={article.id} article={article} />)}
    </div>
  );
}
