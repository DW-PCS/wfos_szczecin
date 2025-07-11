import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface PopupActiveToggleProps {
  active: boolean;
  onToggle: (checked: boolean) => void;
}

export function PopupActiveToggle({ active, onToggle }: PopupActiveToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label>Aktywność popupu</Label>
        <p className="text-sm text-gray-500">Włącz lub wyłącz wyświetlanie popupu</p>
      </div>
      <Switch checked={active} onCheckedChange={onToggle} />
    </div>
  );
}
