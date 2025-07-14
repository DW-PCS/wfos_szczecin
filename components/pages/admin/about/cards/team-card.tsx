import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { AboutContent, Team } from '@/types/admin/admin-about';
import { Trash2 } from 'lucide-react';

interface TeamCardProps {
  team: Team;
  index: number;
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function TeamCard({ team, index, aboutContent, setAboutContent, isEditing }: TeamCardProps) {
  const removeTeam = () => {
    const updated = aboutContent.teams.filter((_, i) => i !== index);
    setAboutContent({ ...aboutContent, teams: updated });
  };

  return (
    <div className="border rounded-lg p-4 relative">
      {isEditing && (
        <Button
          variant="outline"
          size="sm"
          onClick={removeTeam}
          className="absolute top-2 right-2 h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
      <div className="space-y-4 pr-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Nazwa zespołu</Label>
            <Input
              value={team.name}
              onChange={e => {
                const updated = [...aboutContent.teams];
                updated[index] = { ...team, name: e.target.value };
                setAboutContent({ ...aboutContent, teams: updated });
              }}
              disabled={!isEditing}
              placeholder="Wprowadź nazwę zespołu"
            />
          </div>
          <div className="space-y-2">
            <Label>Ikona</Label>
            <Select
              value={team.icon}
              onValueChange={value => {
                const updated = [...aboutContent.teams];
                updated[index] = { ...team, icon: value };
                setAboutContent({ ...aboutContent, teams: updated });
              }}
              disabled={!isEditing}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Briefcase">Teczka</SelectItem>
                <SelectItem value="FileText">Dokument</SelectItem>
                <SelectItem value="Scale">Waga</SelectItem>
                <SelectItem value="Megaphone">Megafon</SelectItem>
                <SelectItem value="Monitor">Monitor</SelectItem>
                <SelectItem value="Building">Budynek</SelectItem>
                <SelectItem value="Users">Użytkownicy</SelectItem>
                <SelectItem value="Settings">Ustawienia</SelectItem>
                <SelectItem value="Phone">Telefon</SelectItem>
                <SelectItem value="Mail">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Opis</Label>
          <Textarea
            value={team.description}
            onChange={e => {
              const updated = [...aboutContent.teams];
              updated[index] = { ...team, description: e.target.value };
              setAboutContent({ ...aboutContent, teams: updated });
            }}
            disabled={!isEditing}
            rows={2}
            placeholder="Wprowadź opis zespołu"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={team.active}
            onCheckedChange={checked => {
              const updated = [...aboutContent.teams];
              updated[index] = { ...team, active: checked };
              setAboutContent({ ...aboutContent, teams: updated });
            }}
            disabled={!isEditing}
          />
          <Label>Aktywny</Label>
        </div>
      </div>
    </div>
  );
}
