import { FAQItemType } from "@/types/faq";

interface FAQItemContentProps {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
}

export function FAQItemContent({ item, index, isOpen }: FAQItemContentProps) {
  if (!isOpen) return null;

  return (
    <div
      id={`faq-answer-${index}`}
      className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300"
    >
      <div className="border-t border-gray-100 pt-4">
        <p className="text-gray-600 leading-relaxed text-base">{item.answer}</p>
      </div>
    </div>
  );
}
