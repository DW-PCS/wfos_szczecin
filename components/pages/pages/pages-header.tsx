'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface PagesHeaderProps {
  onAddNew: () => void;
  isPending?: boolean;
}

export function PagesHeader({ onAddNew, isPending }: PagesHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Strony</h1>
        <p className="text-gray-600">Zarządzaj stronami witryny</p>
      </div>
      <Button className="flex items-center gap-2" onClick={onAddNew} disabled={isPending}>
        <Plus className="h-4 w-4" />
        Utwórz stronę
      </Button>
    </div>
  );
}
