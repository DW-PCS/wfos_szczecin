import { Search } from 'lucide-react';

interface FilesEmptyStateProps {
  searchQuery: string;
}

export function FilesEmptyState({ searchQuery }: FilesEmptyStateProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Brak wyników</h3>
      <p className="text-gray-600">
        {searchQuery
          ? `Nie znaleziono plików pasujących do frazy "${searchQuery}"`
          : 'Brak plików w tej kategorii'}
      </p>
    </div>
  );
}
