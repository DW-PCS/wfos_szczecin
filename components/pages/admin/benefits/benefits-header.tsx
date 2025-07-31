'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface BenefitsHeaderProps {
  onAddBenefit: () => void;
}

export function BenefitsHeader({ onAddBenefit }: BenefitsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Korzyści współpracy</h1>
        <p className="text-gray-600 mt-2">
          Zarządzaj korzyściami wyświetlanymi w sekcji "Dlaczego warto z nami współpracować?"
        </p>
      </div>
      <Button onClick={onAddBenefit}>
        <Plus className="h-4 w-4 mr-2" />
        Dodaj korzyść
      </Button>
    </div>
  );
}
