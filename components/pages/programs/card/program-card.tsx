import { Card } from '@/components/ui/card';
import { ProgramCardHeader } from './program-card-header';
import { ProgramCardContent } from './program-card-content';
import { ProgramCardActions } from './program-card-actions';
import { Program } from '@/types/program';


interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <ProgramCardHeader program={program} />
      <ProgramCardContent program={program} />
      <ProgramCardActions program={program} />
    </Card>
  );
}
