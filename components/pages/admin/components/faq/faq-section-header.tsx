'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface FAQSectionHeaderProps {
  onCreateFAQ: () => void;
}

export function FAQSectionHeader({ onCreateFAQ }: FAQSectionHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">FAQ Komponenty</h2>
        <p className="text-gray-600 text-sm">
          Twórz i zarządzaj różnymi sekcjami FAQ dla różnych stron
        </p>
      </div>
      <Button className="flex items-center gap-2" onClick={onCreateFAQ}>
        <Plus className="h-4 w-4" />
        Nowy FAQ
      </Button>
    </div>
  );
}
