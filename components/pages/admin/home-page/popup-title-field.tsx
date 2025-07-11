import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface PopupTitleFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function PopupTitleField({ value, onChange }: PopupTitleFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="popup-title">Tytuł popupu</Label>
      <Input
        id="popup-title"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Wprowadź tytuł popupu"
      />
    </div>
  );
}
