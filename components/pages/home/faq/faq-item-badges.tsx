import { FAQItemType } from "@/types/faq";

interface FAQItemBadgesProps {
  item: FAQItemType;
}

export function FAQItemBadges({ item }: FAQItemBadgesProps) {
  return (
    <div className="flex items-center mb-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-green/10 text-primary-green mr-3">
        {item.category}
      </span>
      {item.popular && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
          Popularne
        </span>
      )}
    </div>
  );
}
