import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQEmptyStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export function FAQEmptyState({ searchQuery, onClearSearch }: FAQEmptyStateProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Brak wyników</h3>
      <p className="text-gray-600 mb-6">Nie znaleziono pytań pasujących do frazy "{searchQuery}"</p>
      <Button
        onClick={onClearSearch}
        variant="outline"
        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
      >
        Wyczyść wyszukiwanie
      </Button>
    </div>
  );
}
