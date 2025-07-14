import { Program } from '@/types/program';
import { ProgramCard } from './card/program-card';
import ProgramsSectionSkeleton from './programs-section-skeleton';

interface ProgramsListProps {
  programs: Program[];
  isLoading?: boolean;
  maxItems?: number;
}

export function ProgramsList({ programs, isLoading = false, maxItems }: ProgramsListProps) {
  const displayPrograms = maxItems ? programs.slice(0, maxItems) : programs;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
      role="list"
      aria-label="Lista programów dofinansowania"
    >
      {isLoading ? (
        <ProgramsSectionSkeleton />
      ) : (
        displayPrograms.map(program => <ProgramCard key={program.id} program={program} />)
      )}
    </div>
  );
}
