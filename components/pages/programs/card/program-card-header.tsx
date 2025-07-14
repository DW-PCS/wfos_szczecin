import { Badge } from '@/components/ui/badge';
import { getCategoryDisplayName, getStatusColor } from '@/lib/utils/programs';
import { Program } from '@/types/program';

interface ProgramCardHeaderProps {
  program: Program;
}

export function ProgramCardHeader({ program }: ProgramCardHeaderProps) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
      <div className="text-center p-4">
        <h3 className="text-2xl font-bold text-primary-navy mb-2">{program.name}</h3>
        <Badge className={`${getStatusColor(program.status)}`}>
          {program.status === 'otwarty' ? 'Nabór otwarty' : program.status}
        </Badge>
      </div>
      <Badge className="absolute top-4 left-4 bg-white text-primary-navy">
        {getCategoryDisplayName(program.beneficiaryCategories)}
      </Badge>
    </div>
  );
}
