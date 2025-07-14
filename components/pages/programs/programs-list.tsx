import { Program } from '@/types/program';
import { ProgramCard } from './programs-card';
import { ProgramsEmptyState } from './programs-empty-state';

interface ProgramsListProps {
  programs: Program[];
  searchTerm: string;
}

export function ProgramsList({ programs, searchTerm }: ProgramsListProps) {
  if (programs.length == 0) {
    return <ProgramsEmptyState searchTerm={searchTerm} />;
  }

  return (
    <div className="space-y-4">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}
