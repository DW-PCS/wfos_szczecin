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
import { ICON_OPTIONS } from '@/constants/admin/admin-contact';
import { ContactPageOffice } from '@/types/admin/admin-contact';
import { Trash2 } from 'lucide-react';

interface OfficeCardProps {
  office: ContactPageOffice;
  onUpdate: (updates: Partial<ContactPageOffice>) => void;
  onRemove?: () => void;
  isEditing: boolean;
  showRemoveButton: boolean;
}

export function OfficeCard({
  office,
  onUpdate,
  onRemove,
  isEditing,
  showRemoveButton,
}: OfficeCardProps) {
  return (
    <div className={`border rounded-lg p-4 space-y-4 ${showRemoveButton ? 'relative pr-10' : ''}`}>
      {isEditing && showRemoveButton && onRemove && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Typ biura</Label>
          <Input
            value={office.type}
            onChange={e => onUpdate({ type: e.target.value })}
            disabled={!isEditing}
            placeholder="Typ biura"
          />
        </div>
        <div className="space-y-2">
          <Label>Nazwa</Label>
          <Input
            value={office.name}
            onChange={e => onUpdate({ name: e.target.value })}
            disabled={!isEditing}
            placeholder="Nazwa biura"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Adres</Label>
          <Input
            value={office.address}
            onChange={e => onUpdate({ address: e.target.value })}
            disabled={!isEditing}
            placeholder="Adres"
          />
        </div>
        <div className="space-y-2">
          <Label>Telefon</Label>
          <Input
            value={office.phone}
            onChange={e => onUpdate({ phone: e.target.value })}
            disabled={!isEditing}
            placeholder="Numer telefonu"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            value={office.email}
            onChange={e => onUpdate({ email: e.target.value })}
            disabled={!isEditing}
            placeholder="Adres email"
          />
        </div>
        <div className="space-y-2">
          <Label>Link do mapy</Label>
          <Input
            value={office.mapLink}
            onChange={e => onUpdate({ mapLink: e.target.value })}
            disabled={!isEditing}
            placeholder="Link Google Maps"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Ikona</Label>
          <Select
            value={office.icon}
            onValueChange={value => onUpdate({ icon: value })}
            disabled={!isEditing}
          >
            <SelectTrigger>
              <SelectValue placeholder="Wybierz ikonę" />
            </SelectTrigger>
            <SelectContent>
              {ICON_OPTIONS.map(icon => (
                <SelectItem key={icon.value} value={icon.value}>
                  {icon.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2 pt-6">
          <Switch
            checked={office.active}
            onCheckedChange={checked => onUpdate({ active: checked })}
            disabled={!isEditing}
          />
          <Label>Aktywne</Label>
        </div>
      </div>
    </div>
  );
}
