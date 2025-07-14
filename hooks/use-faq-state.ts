import { FAQ_CONFIG } from '@/constants/faq';
import { filterFAQItems, toggleArrayItem } from '@/lib/utils/faq';
import { FAQItemType, FAQState } from '@/types/faq';
import { useState, useMemo } from 'react';


export function useFAQState(items: FAQItemType[], searchQuery: string): FAQState {
  const [openItems, setOpenItems] = useState<number[]>([...FAQ_CONFIG.DEFAULT_OPEN_ITEMS]);

  const filteredItems = useMemo(() => filterFAQItems(items, searchQuery), [items, searchQuery]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => toggleArrayItem(prev, index));
  };

  const isItemOpen = (index: number): boolean => {
    return openItems.includes(index);
  };

  return {
    openItems,
    filteredItems,
    toggleItem,
    isItemOpen,
  };
}
