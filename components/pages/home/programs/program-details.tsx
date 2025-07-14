import { Program } from '@/types/program';

interface ProgramDetailsProps {
  program: Program;
}

export function ProgramDetails({ program }: ProgramDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
      <div>
        <div className="text-sm text-primary-gray">Maksymalne dofinansowanie</div>
        <div
          className="font-semibold text-primary-navy"
          aria-label={`Maksymalne dofinansowanie: ${program.maxSupport || program.budget}`}
        >
          {program.maxSupport || program.budget}
        </div>
      </div>
      <div>
        <div className="text-sm text-primary-gray">Termin naboru</div>
        <div
          className="font-semibold text-primary-navy"
          aria-label={`Termin naboru: ${program.deadline || 'Brak terminu'}`}
        >
          {program.deadline || 'Brak terminu'}
        </div>
      </div>
    </div>
  );
}
