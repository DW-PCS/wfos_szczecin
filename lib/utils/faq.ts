import { FAQComponent, FAQItemType } from '@/types/faq';

export const filterFAQItems = (items: FAQItemType[], searchQuery: string): FAQItemType[] => {
  if (!searchQuery.trim()) return items;

  const query = searchQuery.toLowerCase();
  return items.filter(
    item =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );
};

export const getActiveItems = (items: FAQItemType[]): FAQItemType[] => {
  return items.filter(item => item.isActive);
};

export const sortItemsByOrder = (items: FAQItemType[]): FAQItemType[] => {
  return [...items].sort((a, b) => a.order - b.order);
};

export const findItemIndex = (items: FAQItemType[], itemId: string): number => {
  return items.findIndex(item => item.id === itemId);
};

export const toggleArrayItem = (array: number[], item: number): number[] => {
  return array.includes(item) ? array.filter(i => i !== item) : [...array, item];
};

export const isValidFAQItem = (item: FAQItemType): boolean => {
  return !!(item.question?.trim() && item.answer?.trim() && item.category?.trim());
};

const getActiveItemsSorted = (faqItems: FAQItemType[]) =>
  faqItems.filter(item => item.isActive).sort((a, b) => a.order - b.order);

export const flattenFAQItems = (components: FAQComponent[]) => {
  const allItems: FAQItemType[] = [];
  components.forEach(component => {
    const activeItems = getActiveItemsSorted(component.faqItems);
    allItems.push(...activeItems);
  });
  return allItems;
};
