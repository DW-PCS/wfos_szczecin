import { Article } from "@/types/news";

interface NewsCardTitleProps {
  article: Article;
}

export function NewsCardTitle({ article }: NewsCardTitleProps) {
  return (
    <h3
      className="text-xl md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-primary-green transition-colors duration-300 h-[3.5rem] md:h-[3rem] lg:h-[3.5rem] flex-shrink-0 overflow-hidden"
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {article.title}
    </h3>
  );
}
