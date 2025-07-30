'use client';

import { CalendarIcon } from 'lucide-react';

export function NewsEmptyState() {
  return (
    <div className="text-center py-12 text-gray-500">
      <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-400" />
      <p>Brak aktualności do wyświetlenia.</p>
      <p className="text-sm">Dodaj nowy artykuł, aby zacząć.</p>
    </div>
  );
}
