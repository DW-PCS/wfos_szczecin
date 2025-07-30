'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';

interface NewsCreatorHeaderProps {
  isFormValid: boolean;
  onCancel: () => void;
  onSaveDraft: () => void;
  onPublish: () => void;
  isLoading: boolean;
}

export function NewsCreatorHeader({
  isFormValid,
  onCancel,
  onSaveDraft,
  onPublish,
}: NewsCreatorHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Button type="button" variant="outline" onClick={onCancel}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Powrót do aktualności
      </Button>
      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Anuluj
        </Button>
        <Button type="button" variant="outline" onClick={onSaveDraft}>
          <Save className="h-4 w-4 mr-2" />
          Zapisz szkic
        </Button>
        <Button type="button" onClick={onPublish} disabled={!isFormValid}>
          <Save className="h-4 w-4 mr-2" />
          Opublikuj
        </Button>
      </div>
    </div>
  );
}
