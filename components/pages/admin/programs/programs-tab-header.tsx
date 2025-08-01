'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ProgramsTabHeaderProps {
  onCreateProgram: () => void;
}

export function ProgramsTabHeader({ onCreateProgram }: ProgramsTabHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Lista Programów</h2>
      <Button onClick={onCreateProgram} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Dodaj program
      </Button>
    </div>
  );
}
