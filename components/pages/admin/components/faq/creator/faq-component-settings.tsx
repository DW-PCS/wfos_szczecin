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
import { FAQItemType } from '@/types/faq';

const placementOptions = [
  { value: 'homepage', label: 'Strona główna' },
  { value: 'contact', label: 'Kontakt' },
  { value: 'programs', label: 'Programy' },
  { value: 'about', label: 'O nas' },
  { value: 'custom', label: 'Niestandardowe' },
];

export interface ComponentFormData {
  name?: string;
  description?: string;
  placement?: 'about' | 'homepage' | 'contact' | 'programs' | 'custom';
  customPlacement?: string;
  isActive?: boolean;
  faqItems: FAQItemType[];
}
interface FAQComponentSettingsProps {
  formData: ComponentFormData;
  onFormDataChange: (data: Partial<ComponentFormData>) => void;
}

export function FAQComponentSettings({ formData, onFormDataChange }: FAQComponentSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ustawienia komponentu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nazwa komponentu</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={e => onFormDataChange({ name: e.target.value })}
            placeholder="np. FAQ Strona Główna"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Opis</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e => onFormDataChange({ description: e.target.value })}
            placeholder="Krótki opis komponentu FAQ"
            rows={3}
          />
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

        <div className="flex items-center space-x-2">
          <Switch
            id="isActive"
            checked={formData.isActive}
            onCheckedChange={checked => onFormDataChange({ isActive: checked })}
          />
          <Label htmlFor="isActive">Komponent aktywny</Label>
        </div>
      </CardContent>
    </Card>
  );
}
