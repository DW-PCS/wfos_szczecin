'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';

interface FAQCreatorHeaderProps {
  isEditing: boolean;
  onBack: () => void;
  onSave: () => void;
  canSave: boolean;
}

export function FAQCreatorHeader({ isEditing, onBack, onSave, canSave }: FAQCreatorHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Edytuj FAQ' : 'Nowy FAQ'}
          </h1>
          <p className="text-gray-600">
            {isEditing ? 'Modyfikuj istniejący komponent FAQ' : 'Utwórz nowy komponent FAQ'}
          </p>
        </div>
      </div>
      <Button onClick={onSave} className="flex items-center gap-2" disabled={!canSave}>
        <Save className="h-4 w-4" />
        Zapisz
      </Button>
    </div>
  );
}
