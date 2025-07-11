import { Pagination } from '@/components/features/news/pagination';
import { NewsCard } from '@/components/pages/article/news-card';
import { Article } from '@/types/news';

interface NewsGridWithPaginationProps {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  filteredArticles: Article[];
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export function NewsGridWithPagination({
  articles,
  totalPages,
  currentPage,
  filteredArticles,
  startIndex,
  endIndex,
  onPageChange,
}: NewsGridWithPaginationProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        setCurrentPage={onPageChange}
        currentPage={currentPage}
        filteredArticles={filteredArticles}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </>
  );
}
