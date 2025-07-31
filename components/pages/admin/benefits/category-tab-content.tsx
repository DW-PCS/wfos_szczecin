'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { BenefitCard } from './benefit-card';

import type { LucideIcon } from 'lucide-react';
import { Benefit } from '@/types/benefits';

interface CategoryTabContentProps {
  category: {
    value: string;
    label: string;
    icon: LucideIcon;
  };
  benefits: Benefit[];
  editingId: number | null;
  onEdit: (benefit: Benefit) => void;
  onSave: (benefit: Benefit) => void;
  onCancelEdit: () => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Benefit>) => void;
  onAddBenefit: (category: string) => void;
}

export function CategoryTabContent({
  category,
  benefits,
  editingId,
  onEdit,
  onSave,
  onCancelEdit,
  onDelete,
  onUpdate,
  onAddBenefit,
}: CategoryTabContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <category.icon className="h-5 w-5" />
          Korzyści {category.label.toLowerCase()}
        </h3>
        <Badge variant="outline">{benefits.length} korzyści</Badge>
      </div>

      <div className="grid gap-4">
        {benefits.map(benefit => (
          <BenefitCard
            key={benefit.id}
            benefit={benefit}
            isEditing={editingId === benefit.id}
            onEdit={() => onEdit(benefit)}
            onSave={onSave}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
            onUpdate={data => onUpdate(benefit.id, data)}
          />
        ))}

        {benefits.length === 0 && (
          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <category.icon className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Brak korzyści</h3>
              <p className="text-gray-500 text-center mb-4">
                Nie ma jeszcze żadnych korzyści w tej kategorii.
              </p>
              <Button onClick={() => onAddBenefit(category.value)} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Dodaj pierwszą korzyść
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
