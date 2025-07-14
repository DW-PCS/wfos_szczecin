import { formatDate } from '@/lib/utils/carousel';
import { Article } from '@/types/news';
import { Calendar } from 'lucide-react';

interface NewsCardDateProps {
  article: Article;
}

export function NewsCardDate({ article }: NewsCardDateProps) {
  return (
    <div className="flex items-center text-sm text-gray-500 mb-3 flex-shrink-0">
      <Calendar className="h-4 w-4 mr-2" />
      {formatDate(article.publishedAt || article.createdAt)}
    </div>
  );
}
