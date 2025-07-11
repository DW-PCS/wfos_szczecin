import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FALLBACK_IMAGE } from '@/constants';
import { cn } from '@/lib/cn';
import { getCategoryColor } from '@/lib/utils/helpers';
import { Article } from '@/types/news';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { CalendarIcon, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface NewsCardProps {
  className?: string;
  article: Article;
}

export const NewsCard: FC<NewsCardProps> = ({ className, article }) => {
  const formattedDate = format(article.publishedAt, 'dd MMMM yyyy', { locale: pl });
  const categoryColor = getCategoryColor(article.category);

  return (
    <Card
      className={cn(
        'group overflow-hidden border border-black/12 transition-shadow duration-300 hover:shadow-lg',
        className
      )}
    >
      <div className="relative h-48">
        <Image
          src={article.image || FALLBACK_IMAGE}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {article.featured && (
          <Badge className="absolute left-4 top-4 bg-primary-green text-white">Wyróżnione</Badge>
        )}
        <Badge className={cn('absolute right-4 top-4', categoryColor)}>{article.category}</Badge>
      </div>

      <CardContent className="p-6 flex-1">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={article.publishedAt.toISOString()}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="mb-3 h-[56px] line-clamp-2 text-lg font-semibold text-black transition-colors group-hover:text-primary-green sm:text-xl">
          {article.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-gray-600">{article.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="transition-colors group-hover:bg-primary-green group-hover:text-white hover:bg-primary-green hover:text-white"
            asChild
          >
            <Link href={`/aktualnosci/${article.id}`}>Czytaj więcej</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
