import { NewsFilters } from '@/components/features';
import type { Article } from '@/types/news';

interface NewsFiltersSectionProps {
  searchTerm: string;
  selectedCategory: string;
  filteredArticles: Article[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export function NewsFiltersSection({
  searchTerm,
  selectedCategory,
  filteredArticles,
  onSearchChange,
  onCategoryChange,
}: NewsFiltersSectionProps) {
  return (
    <NewsFilters
      filteredArticles={filteredArticles}
      handleCategoryChange={onCategoryChange}
      handleSearchChange={onSearchChange}
      searchTerm={searchTerm}
      selectedCategory={selectedCategory}
    />
  );
}
