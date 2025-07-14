import { Badge } from '@/components/ui/badge';
import { getCategoryColor } from '@/lib/utils/helpers';
import { Article } from '@/types/news';
import Image from 'next/image';

interface NewsCardImageProps {
  article: Article;
}

export function NewsCardImage({ article }: NewsCardImageProps) {
  return (
    <div className="relative h-48 md:h-44 lg:h-48 overflow-hidden flex-shrink-0">
      <Image
        src={article.imageUrl || '/placeholder.svg'}
        alt={article.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <Badge
          className={`border-0 text-white text-xs md:text-xs lg:text-sm ${getCategoryColor(
            article.category
          )}`}
        >
          {article.category}
        </Badge>
      </div>
    </div>
  );
}
