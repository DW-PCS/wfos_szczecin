import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getStatusDisplay } from '@/lib/utils/offer';
import { ProgramPageType } from '@/types/program';
import { Users } from 'lucide-react';

interface ProgramInfoCardProps {
  program: ProgramPageType;
}

export function ProgramInfoCard({ program }: ProgramInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Informacje o programie
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Status programu</div>
            <div className="text-lg text-gray-900">{getStatusDisplay(program.status)}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Budżet programu</div>
            <div className="text-lg text-gray-900">{program.budget}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Grupa docelowa</div>
            <div className="text-lg text-gray-900">{program.beneficiaryCategories.join(', ')}</div>
          </div>
          {program.startDate && (
            <div>
              <div className="text-sm font-medium text-gray-500">Data rozpoczęcia</div>
              <div className="text-lg text-gray-900">
                {new Date(program.startDate).toLocaleDateString('pl-PL')}
              </div>
            </div>
          )}
          {program.endDate && (
            <div>
              <div className="text-sm font-medium text-gray-500">Data zakończenia</div>
              <div className="text-lg text-gray-900">
                {new Date(program.endDate).toLocaleDateString('pl-PL')}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
