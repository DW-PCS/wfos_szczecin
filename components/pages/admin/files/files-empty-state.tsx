'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface FilesEmptyStateProps {
  searchQuery: string;
  selectedCategory: string;
}

export function FilesEmptyState({ searchQuery, selectedCategory }: FilesEmptyStateProps) {
  return (
    <Card>
      <CardContent className="p-12 text-center">
        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Brak plików</h3>
        <p className="text-gray-600">
          {searchQuery || selectedCategory !== 'all'
            ? 'Nie znaleziono plików pasujących do kryteriów wyszukiwania.'
            : 'Nie dodano jeszcze żadnych plików.'}
        </p>
      </CardContent>
    </Card>
  );
}
