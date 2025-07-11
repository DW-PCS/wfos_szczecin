import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface PopupShowOnceCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function PopupShowOnceCheckbox({ checked, onCheckedChange }: PopupShowOnceCheckboxProps) {
  return (
    <div className="flex items-center space-x-2 pt-2">
      <Checkbox id="popup-show-once" checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor="popup-show-once">Pokaż tylko raz dla każdego użytkownika</Label>
    </div>
  );
}
