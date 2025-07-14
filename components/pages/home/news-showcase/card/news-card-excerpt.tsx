import { Article } from '@/types/news';

interface NewsCardExcerptProps {
  article: Article;
}

export function NewsCardExcerpt({ article }: NewsCardExcerptProps) {
  return (
    <p
      className="text-gray-600 leading-relaxed mb-4 h-[3rem] md:h-[2.5rem] lg:h-[3rem] flex-shrink-0 overflow-hidden text-base md:text-sm lg:text-base"
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {article.excerpt}
    </p>
  );
}
