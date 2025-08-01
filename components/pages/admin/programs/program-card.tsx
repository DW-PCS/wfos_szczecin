'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, LinkIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/cn';
import { ProgramDeleteDialog } from './program-delete-dialog';
import { ProgramPageType } from '@/types/program';


interface Program {
  id: number;
  name: string;
  status: string;
  description: string;
  showOnHomepage?: boolean;
  budget?: string;
  deadline?: string;
  startDate?: Date;
  endDate?: Date;
  beneficiaryCategories?: string[];
  linkedPageSlug?: string;
}

interface ProgramCardProps {
  program: ProgramPageType;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const getProgramStatusVariant = (status: string) => {
  switch (status) {
    case 'otwarty':
      return 'default';
    case 'planowany':
      return 'secondary';
    case 'zakończony':
      return 'outline';
    case 'realizacja':
      return 'secondary';
    case 'zamknięty':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const getStatusDisplay = (status: string) => {
  switch (status) {
    case 'otwarty':
      return 'Otwarty';
    case 'planowany':
      return 'Planowany';
    case 'zakończony':
      return 'Zakończony';
    case 'realizacja':
      return 'W realizacji';
    case 'zamknięty':
      return 'Nabór zamknięty';
    default:
      return status;
  }
};

export function ProgramCard({ program, onEdit, onDelete }: ProgramCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold">{program.name}</h3>
              <Badge variant={getProgramStatusVariant(program.status ?? '')}>
                {getStatusDisplay(program.status ?? '')}
              </Badge>
              {program.showOnHomepage && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Strona główna
                </Badge>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className={cn('text-blue-500 hover:text-blue-700 hover:bg-blue-50')}
                onClick={() => onEdit(program.id)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <ProgramDeleteDialog
                programName={program.name}
                onConfirm={() => onDelete(program.id)}
              />
            </div>
          </div>

          <p className="text-gray-600 text-sm">{program.description}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            {program.budget && <span>Budżet: {program.budget}</span>}
            {program.deadline && <span>Termin: {program.deadline}</span>}
            {program.startDate && <span>Start: {format(program.startDate, 'dd.MM.yyyy')}</span>}
            {program.endDate && <span>Koniec: {format(program.endDate, 'dd.MM.yyyy')}</span>}
          </div>

          {program.beneficiaryCategories && program.beneficiaryCategories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {program.beneficiaryCategories.map(category => (
                <Badge key={category} variant="outline" className="text-xs font-normal">
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {program.linkedPageSlug && (
            <div className="text-xs text-primary-green flex items-center">
              <LinkIcon className="h-3 w-3 mr-1" />
              Strona: /programy/{program.linkedPageSlug}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
