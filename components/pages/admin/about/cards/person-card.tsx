import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Person } from '@/types/admin-about';
import { Trash2 } from 'lucide-react';

interface PersonCardProps {
  person: Person;
  index: number;
  onUpdate: (person: Person) => void;
  onRemove: () => void;
  isEditing: boolean;
  showDescription?: boolean;
}

export function PersonCard({
  person,
  onUpdate,
  onRemove,
  isEditing,
  showDescription = true,
}: PersonCardProps) {
  return (
    <div className="border rounded-lg p-4 relative">
      {isEditing && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRemove}
          className="absolute top-2 right-2 h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
      <div className="space-y-4 pr-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Imię i nazwisko</Label>
            <Input
              value={person.name}
              onChange={e => onUpdate({ ...person, name: e.target.value })}
              disabled={!isEditing}
              placeholder="Wprowadź imię i nazwisko"
            />
          </div>
          <div className="space-y-2">
            <Label>Stanowisko</Label>
            <Input
              value={person.role}
              onChange={e => onUpdate({ ...person, role: e.target.value })}
              disabled={!isEditing}
              placeholder="Wprowadź stanowisko"
            />
          </div>
        </div>
        {showDescription && (
          <div className="space-y-2">
            <Label>Opis</Label>
            <Textarea
              value={person.description || ''}
              onChange={e => onUpdate({ ...person, description: e.target.value })}
              disabled={!isEditing}
              rows={2}
              placeholder="Wprowadź opis osoby"
            />
          </div>
        )}
        <div className="flex items-center space-x-2">
          <Switch
            checked={person.active}
            onCheckedChange={checked => onUpdate({ ...person, active: checked })}
            disabled={!isEditing}
          />
          <Label>Aktywny</Label>
        </div>
      </div>
    </div>
  );
}
