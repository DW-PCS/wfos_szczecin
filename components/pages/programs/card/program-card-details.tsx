import { getCategoryDisplayName } from '@/lib/utils/programs';
import { Program } from '@/types/program';
import { CalendarIcon, MapPin, Users } from 'lucide-react';

interface ProgramCardDetailsProps {
  program: Program;
}

export function ProgramCardDetails({ program }: ProgramCardDetailsProps) {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4" />
        Województwo zachodniopomorskie
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <CalendarIcon className="h-4 w-4" />
        Do {program.deadline}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Users className="h-4 w-4" />
        {getCategoryDisplayName(program.beneficiaryCategories)}
      </div>
    </div>
  );
}
