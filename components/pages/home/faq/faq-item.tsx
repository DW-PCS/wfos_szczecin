import { FAQItemHeader } from './faq-item-header';
import { FAQItemContent } from './faq-item-content';
import { FAQItemType } from '@/types/faq';

interface FAQItemProps {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ item, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
      <FAQItemHeader item={item} index={index} isOpen={isOpen} onToggle={onToggle} />

      <FAQItemContent item={item} index={index} isOpen={isOpen} />
    </div>
  );
}
