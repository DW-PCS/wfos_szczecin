'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { ContactPerson } from '@/types/component-selector';

const placementOptions = [
  { value: 'homepage', label: 'Strona główna' },
  { value: 'contact', label: 'Kontakt' },
  { value: 'programs', label: 'Programy' },
  { value: 'about', label: 'O nas' },
  { value: 'custom', label: 'Niestandardowe' },
];

const cityOptions = ['Szczecin', 'Koszalin', 'Gorzów Wielkopolski', 'Zielona Góra', 'Inne'];

 interface TeamFormData {
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  placement?: 'homepage' | 'contact' | 'programs' | 'about' | 'custom';
  customPlacement?: string;
  isActive?: boolean;
  order?: number;
  contactPersons: ContactPerson[];
}

interface TeamSettingsFormProps {
  formData: TeamFormData;
  onFormDataChange: (data: Partial<TeamFormData>) => void;
}

export function TeamSettingsForm({ formData, onFormDataChange }: TeamSettingsFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ustawienia zespołu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nazwa zespołu</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={e => onFormDataChange({ name: e.target.value })}
            placeholder="np. Zespół ds. Obsługi Wniosków (Biuro Szczecin)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Opis (opcjonalny)</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e => onFormDataChange({ description: e.target.value })}
            placeholder="Krótki opis zespołu"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Adres</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={e => onFormDataChange({ address: e.target.value })}
            placeholder="np. ul. Solskiego 3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Miasto</Label>
          <Select value={formData.city} onValueChange={value => onFormDataChange({ city: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {cityOptions.map(city => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="placement">Miejsce wyświetlania</Label>
          <Select
            value={formData.placement}
            onValueChange={(value: any) => onFormDataChange({ placement: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {placementOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {formData.placement === 'custom' && (
          <div className="space-y-2">
            <Label htmlFor="customPlacement">Niestandardowe miejsce</Label>
            <Input
              id="customPlacement"
              value={formData.customPlacement}
              onChange={e => onFormDataChange({ customPlacement: e.target.value })}
              placeholder="np. /specjalna-strona"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="order">Kolejność wyświetlania</Label>
          <Input
            id="order"
            type="number"
            min="1"
            value={formData.order}
            onChange={e => onFormDataChange({ order: parseInt(e.target.value) || 1 })}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="active"
            checked={formData.isActive}
            onCheckedChange={checked => onFormDataChange({ isActive: checked })}
          />
          <Label htmlFor="active">Zespół aktywny</Label>
        </div>
      </CardContent>
    </Card>
  );
}
