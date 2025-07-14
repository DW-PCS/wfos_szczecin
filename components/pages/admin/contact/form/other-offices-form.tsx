import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ContactPageOtherOffices } from '@/types/admin/admin-contact';


interface OtherOfficesFormProps {
  otherOffices: ContactPageOtherOffices;
  onUpdate: (otherOffices: ContactPageOtherOffices) => void;
  isEditing: boolean;
}

export function OtherOfficesForm({ otherOffices, onUpdate, isEditing }: OtherOfficesFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="offices-title">Tytuł sekcji</Label>
        <Input
          id="offices-title"
          value={otherOffices.title}
          onChange={e => onUpdate({ ...otherOffices, title: e.target.value })}
          disabled={!isEditing}
          placeholder="Tytuł sekcji pozostałych biur"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="offices-description">Opis sekcji</Label>
        <Textarea
          id="offices-description"
          value={otherOffices.description}
          onChange={e => onUpdate({ ...otherOffices, description: e.target.value })}
          disabled={!isEditing}
          placeholder="Opis sekcji pozostałych biur"
          rows={2}
        />
      </div>
    </div>
  );
}
