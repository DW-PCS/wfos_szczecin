import { Button } from '@/components/ui/button';
import { Article } from '@/types/news';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';

interface PaginationProps {
  className?: string;
  totalPages: number;
  setCurrentPage: (v: number) => void;
  currentPage: number;
  filteredArticles: Article[];
  startIndex: number;
  endIndex: number;
}

export const Pagination: FC<PaginationProps> = ({
  className = '',
  totalPages,
  setCurrentPage,
  currentPage,
  filteredArticles,
  startIndex,
  endIndex,
}) => {
  return (
    <>
      <div className={className}>
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-3"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Poprzednia
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`${
                    currentPage === page ? 'bg-primary-green hover:bg-primary-green/90' : ''
                  } px-2 sm:px-3`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-3"
            >
              Następna
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
      <div className="text-center mt-8 text-sm text-gray-600">
        Strona {currentPage} z {totalPages}
        {filteredArticles.length > 0 && (
          <span className="ml-2">
            (wyświetlane {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} z{' '}
            {filteredArticles.length})
          </span>
        )}
      </div>
    </>
  );
};
