import { Globe } from 'lucide-react';

export function PagesEmptyState() {
  return (
    <div className="text-center py-12 text-gray-500">
      <Globe className="h-12 w-12 mx-auto mb-2 text-gray-400" />
      <p>Brak stron do wyświetlenia.</p>
      <p className="text-sm">Dodaj nową stronę, aby zacząć.</p>
    </div>
  );
}
