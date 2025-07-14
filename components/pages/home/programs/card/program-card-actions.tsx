import { Program } from '@/types/program';
import { ProgramDocumentsButton } from './program-documents-button';
import { ProgramInfoButton } from './program-info-button';

interface ProgramCardActionsProps {
  program: Program;
  isClosedOrFinished: boolean;
}

export function ProgramCardActions({ program, isClosedOrFinished }: ProgramCardActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 p-6">
      <ProgramInfoButton program={program} isClosedOrFinished={isClosedOrFinished} />

      <ProgramDocumentsButton program={program} isClosedOrFinished={isClosedOrFinished} />
    </div>
  );
}
