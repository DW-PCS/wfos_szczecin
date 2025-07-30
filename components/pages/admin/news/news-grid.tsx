'use client';

import { Article } from '@/types/news';
import { NewsCard } from './news-card';
import { NewsEmptyState } from './news-empty-state';

interface NewsGridProps {
  articles: Article[];
  onEdit: (articleId: string) => void;
  onDelete: (articleId: string) => void;
}

export function NewsGrid({ articles, onEdit, onDelete }: NewsGridProps) {
  if (articles.length === 0) {
    return <NewsEmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(article => (
        <NewsCard key={article.id} article={article} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
