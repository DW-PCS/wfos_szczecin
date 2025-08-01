import { Program, ProgramPageType } from '@/types/program';
import { ContactInfoCard } from './contact-info';
import { ProgramActions } from './program-actions';
import { ProgramInfoCard } from './program-info';

interface ProgramDetailsProps {
  program: ProgramPageType;
}

export function ProgramDetails({ program }: ProgramDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProgramInfoCard program={program} />
        <ContactInfoCard />
      </div>
      <ProgramActions program={program} />
    </div>
  );
}
