import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface PopupContentFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function PopupContentField({ value, onChange }: PopupContentFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="popup-content">Treść popupu</Label>
      <Textarea
        id="popup-content"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Wprowadź treść popupu"
        rows={5}
      />
    </div>
  );
}
