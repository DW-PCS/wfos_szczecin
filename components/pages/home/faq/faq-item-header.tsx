import { FAQItemType } from '@/types/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemBadges } from './faq-item-badges';

interface FAQItemHeaderProps {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItemHeader({ item, index, isOpen, onToggle }: FAQItemHeaderProps) {
  return (
    <button
      onClick={onToggle}
      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors group"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <div className="flex-1 pr-4">
        <FAQItemBadges item={item} />
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-green transition-colors">
          {item.question}
        </h3>
      </div>
      <div className="flex-shrink-0">
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-green transform group-hover:scale-110 transition-transform" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary-green transform group-hover:scale-110 transition-transform" />
        )}
      </div>
    </button>
  );
}
