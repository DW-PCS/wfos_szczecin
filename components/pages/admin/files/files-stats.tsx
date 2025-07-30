'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderPlus, File, Search } from 'lucide-react';

interface FilesStatsProps {
  categoriesCount: number;
  filesCount: number;
  filteredFilesCount: number;
  searchQuery: string;
}

export function FilesStats({
  categoriesCount,
  filesCount,
  filteredFilesCount,
  searchQuery,
}: FilesStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Kategorie</CardTitle>
          <FolderPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{categoriesCount}</div>
          <p className="text-xs text-muted-foreground">aktywnych kategorii</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pliki</CardTitle>
          <File className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{filesCount}</div>
          <p className="text-xs text-muted-foreground">dostępnych plików</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wyniki wyszukiwania</CardTitle>
          <Search className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{filteredFilesCount}</div>
          <p className="text-xs text-muted-foreground">
            {searchQuery ? 'pasujących plików' : 'wszystkich plików'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
