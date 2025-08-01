'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactTeam } from '@/types/component-selector';

import { format } from 'date-fns';
import { Copy, Edit, Eye, EyeOff, MapPin } from 'lucide-react';
import { ContactTeamDeleteDialog } from '../dialogs/contact-team-delete-dialog';

const placementLabels = {
  homepage: 'Strona główna',
  contact: 'Kontakt',
  programs: 'Programy',
  about: 'O nas',
  custom: 'Niestandardowe',
};

interface ContactTeamCardProps {
  team: ContactTeam;
  onEdit: (team: ContactTeam) => void;
  onToggleActive: (teamId: number) => void;
  onDuplicate: (team: ContactTeam) => void;
  onDelete: (teamId: number) => void;
}

export function ContactTeamCard({
  team,
  onEdit,
  onToggleActive,
  onDuplicate,
  onDelete,
}: ContactTeamCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant={team.isActive ? 'default' : 'secondary'}
            className={team.isActive ? 'bg-green-100 text-green-800' : ''}
          >
            {team.isActive ? 'Aktywny' : 'Nieaktywny'}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {placementLabels[team.placement]}
          </Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2">{team.name}</CardTitle>
        <CardDescription className="text-sm flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {team.address}, {team.city}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Osoby:</span>
            <span className="font-medium">{team.contactPersons.length}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Aktywne:</span>
            <span className="font-medium">
              {team.contactPersons.filter(person => person.active).length}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Kolejność:</span>
            <span className="font-medium">{team.order}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Ostatnia aktualizacja:</span>
            <span className="font-medium text-xs">
              {format(new Date(team.updatedAt), 'dd.MM.yyyy')}
            </span>
          </div>
        </div>
      </CardContent>
      <div className="p-4 border-t flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onEdit(team)}>
          <Edit className="h-4 w-4 mr-2" /> Edytuj
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onToggleActive(team.id)}
          className={
            team.isActive
              ? 'text-orange-600 hover:text-orange-700'
              : 'text-green-600 hover:text-green-700'
          }
        >
          {team.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDuplicate(team)}
          className="text-blue-600 hover:text-blue-700"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <ContactTeamDeleteDialog teamName={team.name} onConfirm={() => onDelete(team.id)} />
      </div>
    </Card>
  );
}
