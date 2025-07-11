import { Article } from '@/types/news';
import { useState } from 'react';
import { useNewsFilters } from './use-news-filter';
import { usePagination } from './use-pagination';

export function useNewsPageState(articles: Article[], itemsPerPage: 6) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    searchTerm,
    selectedCategory,
    filteredArticles,
    handleSearchChange,
    handleCategoryChange,
    resetFilters,
  } = useNewsFilters(articles);

  const {
    currentItems: currentArticles,
    totalPages,
    startIndex,
    endIndex,
  } = usePagination(filteredArticles, itemsPerPage, currentPage);

  const handleSearchChangeWithReset = (value: string) => {
    handleSearchChange(value);
    setCurrentPage(1);
  };

  const handleCategoryChangeWithReset = (value: string) => {
    handleCategoryChange(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    resetFilters();
    setCurrentPage(1);
  };

  return {
    currentPage,
    searchTerm,
    selectedCategory,

    filteredArticles,
    currentArticles,
    totalPages,
    startIndex,
    endIndex,

    setCurrentPage,
    handleSearchChange: handleSearchChangeWithReset,
    handleCategoryChange: handleCategoryChangeWithReset,
    resetFilters: handleResetFilters,
  };
}
