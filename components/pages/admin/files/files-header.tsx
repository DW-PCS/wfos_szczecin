'use client';

import { Button } from '@/components/ui/button';
import { Plus, FolderPlus } from 'lucide-react';

interface FilesHeaderProps {
  onAddCategory: () => void;
  onAddFile: () => void;
}

export function FilesHeader({ onAddCategory, onAddFile }: FilesHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Zarządzanie plikami</h1>
        <p className="text-gray-600">Zarządzaj kategoriami i plikami do pobrania</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onAddCategory}>
          <FolderPlus className="h-4 w-4 mr-2" />
          Dodaj kategorię
        </Button>
        <Button onClick={onAddFile}>
          <Plus className="h-4 w-4 mr-2" />
          Dodaj plik
        </Button>
      </div>
    </div>
  );
}
