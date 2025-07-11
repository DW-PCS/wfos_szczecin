import { Article } from '@/types/news';
import { useMemo, useState } from 'react';

interface UseNewsFiltersReturn {
  searchTerm: string;
  selectedCategory: string;
  filteredArticles: Article[];
  handleSearchChange: (value: string) => void;
  handleCategoryChange: (value: string) => void;
  resetFilters: () => void;
}

export function useNewsFilters(articles: Article[]): UseNewsFiltersReturn {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'Wszystkie' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchTerm, selectedCategory]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Wszystkie');
  };

  return {
    searchTerm,
    selectedCategory,
    filteredArticles,
    handleSearchChange,
    handleCategoryChange,
    resetFilters,
  };
}
