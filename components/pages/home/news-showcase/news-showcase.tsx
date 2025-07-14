'use client';



import { newsArticles } from '@/constants';
import { NewsShowcaseHeader } from './news-showcase-header';
import { NewsCarousel } from './carousel/news-carousel';
import { ViewAllNewsButton } from './view-all-news-button';
import { useNewsCarousel } from '@/hooks/use-news-carousel';

export default function NewsShowcase() {
  const carouselState = useNewsCarousel(newsArticles.length);

  return (
    <section className="py-20" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-4">
        <NewsShowcaseHeader />

        <NewsCarousel news={newsArticles} hasHydrated={true} carouselState={carouselState} />

        <ViewAllNewsButton />
      </div>
    </section>
  );
}
