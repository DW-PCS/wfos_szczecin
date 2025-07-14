import { Program } from '@/types/program';
import { ProgramCard } from './card/program-card';
import { ProgramsEmptyState } from './programs-empty-state';
import { ProgramsLoadingSkeleton } from './programs-loading-skeleton';

interface ProgramsGridProps {
  programs: Program[];
  isLoading: boolean;
  hasResults: boolean;
}

export function ProgramsGrid({ programs, isLoading, hasResults }: ProgramsGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <ProgramsLoadingSkeleton />
        ) : !hasResults ? (
          <ProgramsEmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
