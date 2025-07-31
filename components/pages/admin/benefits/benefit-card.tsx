'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit } from 'lucide-react';

import { Benefit } from '@/types/benefits';
import { BenefitDeleteDialog } from './benefit-delete-dialog';
import { BenefitForm } from './benefit-form';

const categoryOptions = [
  { value: 'financial', label: 'Finansowe' },
  { value: 'organizational', label: 'Organizacyjne' },
  { value: 'environmental', label: 'Środowiskowe' },
];

interface BenefitCardProps {
  benefit: Benefit;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (benefit: Benefit) => void;
  onCancelEdit: () => void;
  onDelete: (id: number) => void;
  onUpdate: (data: Partial<Benefit>) => void;
}

export function BenefitCard({
  benefit,
  isEditing,
  onEdit,
  onSave,
  onCancelEdit,
  onDelete,
  onUpdate,
}: BenefitCardProps) {
  if (isEditing) {
    return (
      <BenefitForm
        benefit={benefit}
        onBenefitChange={onUpdate}
        onSave={() => onSave(benefit)}
        onCancel={onCancelEdit}
        isEditing={true}
      />
    );
  }

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
              <Badge variant={benefit.isActive ? 'default' : 'secondary'}>
                {benefit.isActive ? 'Aktywna' : 'Nieaktywna'}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onEdit}>
                <Edit className="h-4 w-4" />
              </Button>
              <BenefitDeleteDialog onConfirm={() => onDelete(benefit.id)} />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

          <div className="flex gap-4 text-sm text-gray-500">
            <span>Ikona: {benefit.icon}</span>
            <span>Kolejność: {benefit.order}</span>
            <span>Kategoria: {categoryOptions.find(c => c.value === benefit.category)?.label}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
