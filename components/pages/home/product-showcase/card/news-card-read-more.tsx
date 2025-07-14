import { Button } from '@/components/ui/button';
import { Article } from '@/types/news';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NewsCardReadMoreProps {
  article: Article;
  text?: string;
}

export function NewsCardReadMore({ article, text = 'Czytaj więcej' }: NewsCardReadMoreProps) {
  return (
    <div className="mt-auto">
      <Button
        variant="ghost"
        className="text-primary-green hover:text-primary-lime hover:bg-primary-green/5 p-0 h-auto font-medium transition-all duration-300 text-sm md:text-sm lg:text-base"
        asChild
      >
        <Link href={`/aktualnosci/${article.id}`}>
          {text}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
