'use client';

import { ProgramPageType } from '@/types/program';
import { ProgramCard } from './program-card';



interface ProgramsGridProps {
  programs: ProgramPageType[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ProgramsGrid({ programs, onEdit, onDelete }: ProgramsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
