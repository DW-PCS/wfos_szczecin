import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ContactPageHeadquarters } from '@/types/admin/admin-contact';


interface HeadquartersFormProps {
  headquarters: ContactPageHeadquarters;
  onUpdate: (headquarters: ContactPageHeadquarters) => void;
  isEditing: boolean;
}

export function HeadquartersForm({ headquarters, onUpdate, isEditing }: HeadquartersFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="headquarters-title">Tytuł sekcji</Label>
        <Input
          id="headquarters-title"
          value={headquarters.title}
          onChange={e => onUpdate({ ...headquarters, title: e.target.value })}
          disabled={!isEditing}
          placeholder="Tytuł sekcji siedziby głównej"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="headquarters-description">Opis sekcji</Label>
        <Textarea
          id="headquarters-description"
          value={headquarters.description}
          onChange={e => onUpdate({ ...headquarters, description: e.target.value })}
          disabled={!isEditing}
          placeholder="Opis sekcji siedziby głównej"
          rows={2}
        />
      </div>
    </div>
  );
}
