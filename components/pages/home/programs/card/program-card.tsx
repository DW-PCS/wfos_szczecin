import { Card } from '@/components/ui/card';

import { getStatusDisplay } from '@/lib/utils/offer';
import { Program } from '@/types/program';

import { ProgramCardActions } from './program-card-actions';
import { ProgramCardContent } from './program-card-content';
import { ProgramCardHeader } from './program-card-header';
import { ProgramStatusBadge } from './program-status-badge';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const isClosedOrFinished = program.status === 'zakończony' || program.status === 'zamknięty';
  const statusDisplay = getStatusDisplay(program.status);

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 border-0 shadow-md rounded-3xl relative overflow-hidden ${
        isClosedOrFinished ? 'opacity-60 grayscale' : ''
      }`}
      role="listitem"
      aria-labelledby={`program-title-${program.id}`}
      aria-describedby={`program-description-${program.id} program-status-${program.id}`}
    >
      <ProgramStatusBadge
        status={program.status}
        programId={program.id}
        statusDisplay={statusDisplay}
      />
      <ProgramCardHeader program={program} />
      <ProgramCardContent program={program} />

      <ProgramCardActions program={program} isClosedOrFinished={isClosedOrFinished} />
    </Card>
  );
}
