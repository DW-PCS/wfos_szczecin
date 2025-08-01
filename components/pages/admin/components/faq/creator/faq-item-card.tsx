'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FAQItemType } from '@/types/faq';
import { GripVertical, Star } from 'lucide-react';
import { FAQDeleteDialog } from './faq-delete-dialog';

interface FAQItemCardProps {
  faq: FAQItemType;
  index: number;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onEdit: (index: number) => void;
  onMove: (index: number, direction: 'up' | 'down') => void;
  onDelete: (index: number) => void;
}

export function FAQItemCard({
  faq,
  index,
  canMoveUp,
  canMoveDown,
  onEdit,
  onMove,
  onDelete,
}: FAQItemCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{faq.category}</Badge>
            {faq.popular && (
              <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                <Star className="h-3 w-3 mr-1" />
                Popularne
              </Badge>
            )}
            {!faq.isActive && <Badge variant="secondary">Nieaktywne</Badge>}
          </div>
          <h4 className="font-medium text-gray-900 mb-1">{faq.question}</h4>
          <p className="text-sm text-gray-600 line-clamp-2">{faq.answer}</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="flex flex-col gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(index, 'up')}
              disabled={!canMoveUp}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(index, 'down')}
              disabled={!canMoveDown}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => onEdit(index)}>
            Edytuj
          </Button>
          <FAQDeleteDialog onConfirm={() => onDelete(index)} />
        </div>
      </div>
    </div>
  );
}
