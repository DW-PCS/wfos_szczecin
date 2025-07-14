import { Badge } from '@/components/ui/badge';
import { getStatusDisplay } from '@/lib/utils/offer';
import { getCategoryDisplayName, getStatusColor } from '@/lib/utils/programs';
import { ProgramPageType } from '@/types/program';

interface ProgramBadgesProps {
  program: ProgramPageType;
}

export function ProgramBadges({ program }: ProgramBadgesProps) {
  return (
    <div className="mb-6">
      <Badge className={`mb-4 ${getStatusColor(program.status)}`}>
        {getStatusDisplay(program.status)}
      </Badge>
      <Badge className="ml-2 bg-primary-navy text-white">
        {getCategoryDisplayName(program.beneficiaryCategories)}
      </Badge>
    </div>
  );
}
