import { toggleArrayItem } from '@/lib/utils/faq';
import { useState, useCallback } from 'react';

interface UseFAQAccordionReturn {
  openItems: number[];
  toggleItem: (index: number) => void;
  openAll: (totalItems: number) => void;
  closeAll: () => void;
  isItemOpen: (index: number) => boolean;
}

export function useFAQAccordion(defaultOpenItems: number[] = [0]): UseFAQAccordionReturn {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpenItems);

  const toggleItem = useCallback((index: number) => {
    setOpenItems(prev => toggleArrayItem(prev, index));
  }, []);

  const openAll = useCallback((totalItems: number) => {
    setOpenItems(Array.from({ length: totalItems }, (_, i) => i));
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems([]);
  }, []);

  const isItemOpen = useCallback(
    (index: number): boolean => {
      return openItems.includes(index);
    },
    [openItems]
  );

  return {
    openItems,
    toggleItem,
    openAll,
    closeAll,
    isItemOpen,
  };
}
