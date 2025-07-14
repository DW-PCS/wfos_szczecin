import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Program } from '@/types/program';
import { ProgramCardDetails } from './program-card-details';
import { ProgramCardFunding } from './program-card-funding';

interface ProgramCardContentProps {
  program: Program;
}

export function ProgramCardContent({ program }: ProgramCardContentProps) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary-green transition-colors">
          {program.name}
        </CardTitle>
        <CardDescription className="text-gray-600">{program.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ProgramCardDetails program={program} />
        <ProgramCardFunding program={program} />
      </CardContent>
    </>
  );
}
