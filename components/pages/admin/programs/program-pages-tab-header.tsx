'use client';

import { Button } from '@/components/ui/button';
import { FilePlus2 } from 'lucide-react';

interface ProgramPagesTabHeaderProps {
  onCreatePage: () => void;
}

export function ProgramPagesTabHeader({ onCreatePage }: ProgramPagesTabHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Strony powiązane z programami</h2>
      <Button onClick={onCreatePage} className="flex items-center gap-2">
        <FilePlus2 className="h-4 w-4" />
        Utwórz nową stronę programu
      </Button>
    </div>
  );
}
