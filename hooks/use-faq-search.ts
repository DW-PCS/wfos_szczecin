import { filterFAQItems } from '@/lib/utils/faq';
import { FAQItemType } from '@/types/faq';
import { useState, useMemo, useCallback } from 'react';

interface UseFAQSearchReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredItems: FAQItemType[];
  clearSearch: () => void;
  hasResults: boolean;
}

export function useFAQSearch(items: FAQItemType[]): UseFAQSearchReturn {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => filterFAQItems(items, searchQuery), [items, searchQuery]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const hasResults = filteredItems.length > 0;

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
    clearSearch,
    hasResults,
  };
}
