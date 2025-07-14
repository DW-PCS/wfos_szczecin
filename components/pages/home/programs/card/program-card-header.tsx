import { CardHeader, CardTitle } from '@/components/ui/card';
import { getIconForProgram } from '@/lib/utils/offer';

import { Program } from '@/types/program';

interface ProgramCardHeaderProps {
  program: Program;
}

export function ProgramCardHeader({ program }: ProgramCardHeaderProps) {
  const IconComponent = getIconForProgram(program.name);

  return (
    <CardHeader className="pb-4 pr-24">
      <div className="flex items-start">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-primary-green/10 rounded-lg" aria-hidden="true">
            <IconComponent className="h-6 w-6 text-primary-green" />
          </div>
          <div>
            <CardTitle id={`program-title-${program.id}`} className="text-xl text-primary-navy">
              {program.name}
            </CardTitle>
          </div>
        </div>
      </div>
    </CardHeader>
  );
}
