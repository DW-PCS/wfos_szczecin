import { NewsEmptyState } from '@/components/pages/article/news-empty-state';
import { Article } from '@/types/news';
import { NewsGridWithPagination } from './news-grid-with-pagination';

interface NewsContentSectionProps {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  filteredArticles: Article[];
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
}

export function NewsContentSection({
  articles,
  totalPages,
  currentPage,
  filteredArticles,
  startIndex,
  endIndex,
  onPageChange,
  onResetFilters,
}: NewsContentSectionProps) {
  const hasArticles = articles.length > 0;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {hasArticles ? (
          <NewsGridWithPagination
            articles={articles}
            totalPages={totalPages}
            currentPage={currentPage}
            filteredArticles={filteredArticles}
            startIndex={startIndex}
            endIndex={endIndex}
            onPageChange={onPageChange}
          />
        ) : (
          <NewsEmptyState
            onResetFilters={onResetFilters}
            setSearchTerm={() => {}}
            setSelectedCategory={() => {}}
            setCurrentPage={() => {}}
          />
        )}
      </div>
    </section>
  );
}
