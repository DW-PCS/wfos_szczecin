import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { getCategoryColor } from '@/lib/utils/helpers';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import {
  ArrowLeft,
  CalendarIcon,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
  User,
} from 'lucide-react';
import Link from 'next/link';


export const ArticleHeader = ({ article }: { article: any }) => (
  <div className="max-w-4xl mx-auto">
    <Link href="/aktualnosci">
      <Button variant="outline" className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Powrót do aktualności
      </Button>
    </Link>

    <div className="mb-6">
      <Badge className={cn('mb-4', getCategoryColor(article.category))}>{article.category}</Badge>
      {article.featured && <Badge className="ml-2 bg-primary-green text-white">Wyróżnione</Badge>}
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
      {article.title}
    </h1>

    <ArticleMeta article={article} />
    <SocialShare />
  </div>
);

const ArticleMeta = ({ article }: { article: any }) => (
  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
    <div className="flex items-center gap-2">
      <User className="h-4 w-4" />
      {article.author}
    </div>
    <div className="flex items-center gap-2">
      <CalendarIcon className="h-4 w-4" />
      {format(article.publishedAt, 'dd MMMM yyyy', { locale: pl })}
    </div>
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4" />
      {article.readTime}
    </div>
  </div>
);

const SocialShare = () => {
  const socialButtons = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Share2, label: 'Share' },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-8 pb-8 border-b">
      <span className="text-sm font-medium text-gray-700">Udostępnij:</span>
      <div className="flex gap-2">
        {socialButtons.map(({ icon: Icon, label }) => (
          <Button
            key={label}
            size="sm"
            variant="outline"
            className="p-2"
            aria-label={`Share on ${label}`}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
    </div>
  );
};
