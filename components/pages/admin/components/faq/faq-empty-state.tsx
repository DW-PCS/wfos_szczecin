'use client';

import { HelpCircle } from 'lucide-react';

export function FAQEmptyState() {
  return (
    <div className="text-center py-12 text-gray-500">
      <HelpCircle className="h-12 w-12 mx-auto mb-2 text-gray-400" />
      <p>Brak komponentów FAQ do wyświetlenia.</p>
      <p className="text-sm">Dodaj nowy komponent, aby zacząć.</p>
    </div>
  );
}
