import { FAQItemType } from '@/types/faq';
import { FAQItem } from './faq-item';


interface FAQListProps {
  items: FAQItemType[];
  originalItems: FAQItemType[];
  openItems: number[];
  onToggleItem: (index: number) => void;
}

export function FAQList({ items, originalItems, openItems, onToggleItem }: FAQListProps) {
  return (
    <div className="space-y-4">
      {items.map(item => {
        const originalIndex = originalItems.findIndex(faq => faq.id === item.id);
        const isOpen = openItems.includes(originalIndex);

        return (
          <FAQItem
            key={item.id}
            item={item}
            index={originalIndex}
            isOpen={isOpen}
            onToggle={() => onToggleItem(originalIndex)}
          />
        );
      })}
    </div>
  );
}
