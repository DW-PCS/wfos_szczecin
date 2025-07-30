'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface NewsHeaderProps {
  onAddNew: () => void;
}

export function NewsHeader({ onAddNew }: NewsHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Aktualności</h1>
        <p className="text-gray-600">Zarządzaj wiadomościami i artykułami</p>
      </div>
      <Button className="flex items-center gap-2" onClick={onAddNew}>
        <Plus className="h-4 w-4" />
        Dodaj aktualność
      </Button>
    </div>
  );
}
