import { Article } from '@/types/news';
import { NewsCardDate } from './news-card-date';
import { NewsCardTitle } from './news-card-title';
import { NewsCardExcerpt } from './news-card-excerpt';
import { NewsCardReadMore } from './news-card-read-more';

interface NewsCardContentProps {
  article: Article;
}

export function NewsCardContent({ article }: NewsCardContentProps) {
  return (
    <div className="p-6 md:p-5 lg:p-6 flex flex-col flex-grow">
      <NewsCardDate article={article} />
      <NewsCardTitle article={article} />
      <NewsCardExcerpt article={article} />
      <NewsCardReadMore article={article} />
    </div>
  );
}
