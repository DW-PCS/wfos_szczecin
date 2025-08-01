'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Page } from '@/types/page';
import { ProgramPageCard } from './program-page-card';

interface ProgramPagesGridProps {
  pages: Page[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ProgramPagesGrid({ pages, onEdit, onDelete }: ProgramPagesGridProps) {
  if (pages.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-gray-500 py-8">
            <p className="mb-2">Brak utworzonych stron programów.</p>
            <p className="text-sm">
              Możesz utworzyć nową stronę dedykowaną dla programu za pomocą przycisku powyżej.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pages.map(page => (
        <ProgramPageCard key={page.id} page={page} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
