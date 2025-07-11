'use client';

import { useNewsFilters } from '@/hooks/use-news-filter';
import { usePagination } from '@/hooks/use-pagination';
import { Article } from '@/types/news';
import { useState } from 'react';
import { NewsContentSection } from './news-content-section';
import { NewsFiltersSection } from './news-filters-section';
import { NewsHeroSection } from './news-hero-section';

const ITEMS_PER_PAGE = 6;

interface ArticlesPageProps {
  articles: Article[];
}

export default function ArticlesPage({ articles }: ArticlesPageProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: Move all client-side filtering and pagination logic to server-side API calls
  // - Replace useState for currentPage with URL search params
  // - Move filtering logic (searchTerm, selectedCategory, filteredArticles) to API endpoints
  // - Replace handleSearchChange, handleCategoryChange, resetFilters with server actions
  // - Update useNewsFilters to make API calls instead of client-side array manipulation
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
    goToPage,
  } = usePagination(filteredArticles, ITEMS_PER_PAGE, currentPage);

  const handleSearchChangeWithReset = (value: string) => {
    handleSearchChange(value);
    setCurrentPage(1);
    goToPage(1);
  };

  const handleCategoryChangeWithReset = (value: string) => {
    handleCategoryChange(value);
    setCurrentPage(1);
    goToPage(1);
  };

  const handleResetFilters = () => {
    resetFilters();
    setCurrentPage(1);
    goToPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <NewsHeroSection />

        <NewsFiltersSection
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          filteredArticles={filteredArticles}
          onSearchChange={handleSearchChangeWithReset}
          onCategoryChange={handleCategoryChangeWithReset}
        />

        <NewsContentSection
          articles={currentArticles}
          totalPages={totalPages}
          currentPage={currentPage}
          filteredArticles={filteredArticles}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={setCurrentPage}
          onResetFilters={handleResetFilters}
        />
      </main>
    </div>
  );
}
