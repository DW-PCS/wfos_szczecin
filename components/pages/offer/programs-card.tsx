import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/cn';
import { getStatusColor, getStatusDisplay, getStatusLabel } from '@/lib/utils/offer';
import { Program } from '@/types/program';
import { ProgramCardActions } from './programs-card-actions';
import { ProgramCardDetails } from './programs-card-details';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const statusDisplay = getStatusDisplay(program.status);
  const isClosedOrFinished = statusDisplay === 'Zakończony' || statusDisplay === 'Nabór zamknięty';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary-green/30 hover:shadow-xl',
        isClosedOrFinished && 'opacity-60 grayscale'
      )}
    >
      <div className="absolute right-6 top-6 z-10">
        <Badge
          className={cn(
            'rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg',
            getStatusColor(program.status)
          )}
        >
          {getStatusLabel(program.status)}
        </Badge>
      </div>

      <div className="pr-24">
        <h3 className="mb-4 text-2xl font-bold text-primary-navy">{program.name}</h3>

        <p className="mb-6 leading-relaxed text-gray-600">{program.description}</p>

        <ProgramCardDetails program={program} />
        <ProgramCardActions program={program} isClosedOrFinished={isClosedOrFinished} />
      </div>
    </div>
  );
}
