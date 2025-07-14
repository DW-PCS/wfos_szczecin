import { Badge } from '@/components/ui/badge';
import { getStatusColor } from '@/lib/utils/offer';

interface ProgramStatusBadgeProps {
  status: string;
  programId: number;
  statusDisplay: string;
}

export function ProgramStatusBadge({ status, programId, statusDisplay }: ProgramStatusBadgeProps) {
  return (
    <div className="absolute top-6 right-6 z-10">
      <Badge
        className={`${getStatusColor(
          status
        )} px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg`}
        id={`program-status-${programId}`}
        aria-label={`Status programu: ${statusDisplay}`}
      >
        {statusDisplay}
      </Badge>
    </div>
  );
}
