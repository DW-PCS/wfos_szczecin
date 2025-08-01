import { cn } from '@/lib/cn';

interface ArticleContentProps {
  content: string;
  className?: string;
}

export const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <section className={cn('pb-12', className)}>
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="prose sm:prose-lg max-w-none text-black prose-headings:text-black prose-a:text-primary-green hover:prose-a:text-primary-green/80"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </section>
);
