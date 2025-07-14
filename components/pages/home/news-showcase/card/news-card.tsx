import { Article } from '@/types/news';
import { NewsCardImage } from './news-card-image';
import { NewsCardContent } from './news-card-content';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-[480px] md:h-[460px] lg:h-[480px] flex flex-col mx-auto md:mx-0 max-w-sm md:max-w-none w-full">
      <NewsCardImage article={article} />
      <NewsCardContent article={article} />
    </article>
  );
}
