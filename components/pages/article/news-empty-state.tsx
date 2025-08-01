import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { FC } from 'react';

interface NewsEmptyStateProps {
  className?: string;
  setSearchTerm: (v: string) => void;
  setSelectedCategory: (v: string) => void;
  setCurrentPage: (v: number) => void;
  onResetFilters: () => void;
}

export const NewsEmptyState: FC<NewsEmptyStateProps> = ({
  className = '',

  onResetFilters,
}) => {
  return (
    <div className={className}>
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <Search className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Brak wyników</h3>
          <p className="text-gray-600 mb-4">
            Nie znaleziono artykułów spełniających kryteria wyszukiwania.
          </p>
          <Button variant="outline" onClick={onResetFilters}>
            Wyczyść filtry
          </Button>
        </div>
      </div>
    </div>
  );
};
