import { CardContent, CardDescription } from '@/components/ui/card';
import { Program } from '@/types/program';
import { ProgramDetails } from '../program-details';


interface ProgramCardContentProps {
  program: Program;
}

export function ProgramCardContent({ program }: ProgramCardContentProps) {
  return (
    <CardContent className="space-y-4">
      <CardDescription
        id={`program-description-${program.id}`}
        className="text-primary-gray leading-relaxed"
      >
        {program.description}
      </CardDescription>

      <ProgramDetails program={program} />
    </CardContent>
  );
}
