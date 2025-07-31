'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQItemCard } from './faq-item-card';
import { FAQItemType } from '@/types/faq';


interface FAQItemsListProps {
  faqItems: FAQItemType[];
  onEdit: (index: number) => void;
  onMove: (index: number, direction: 'up' | 'down') => void;
  onDelete: (index: number) => void;
}

export function FAQItemsList({ faqItems, onEdit, onMove, onDelete }: FAQItemsListProps) {
  if (faqItems.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pytania w komponencie ({faqItems.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <FAQItemCard
              key={faq.id}
              faq={faq}
              index={index}
              canMoveUp={index > 0}
              canMoveDown={index < faqItems.length - 1}
              onEdit={onEdit}
              onMove={onMove}
              onDelete={onDelete}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
