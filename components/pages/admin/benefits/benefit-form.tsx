'use client';

import { Button } from '@/components/ui/button';
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
import { Benefit } from '@/types/benefits';
import { Save, Target, X } from 'lucide-react';

const iconOptions = [
  { value: 'DollarSign', label: 'Dolar' },
  { value: 'Calendar', label: 'Kalendarz' },
  { value: 'Clock', label: 'Zegar' },
  { value: 'X', label: 'X (brak)' },
  { value: 'Target', label: 'Cel' },
  { value: 'TrendingDown', label: 'Trend spadkowy' },
  { value: 'Building2', label: 'Budynek' },
  { value: 'Award', label: 'Nagroda' },
  { value: 'MapPin', label: 'Lokalizacja' },
  { value: 'RefreshCw', label: 'Odświeżanie' },
  { value: 'Leaf', label: 'Liść' },
  { value: 'Recycle', label: 'Recykling' },
  { value: 'Lightbulb', label: 'Żarówka' },
  { value: 'Globe', label: 'Kula ziemska' },
  { value: 'Flag', label: 'Flaga' },
];

const categoryOptions = [
  { value: 'financial', label: 'Finansowe' },
  { value: 'organizational', label: 'Organizacyjne' },
  { value: 'environmental', label: 'Środowiskowe' },
];

interface BenefitFormProps {
  benefit: Benefit;
  onBenefitChange: (data: Partial<Benefit>) => void;
  onSave: () => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export function BenefitForm({
  benefit,
  onBenefitChange,
  onSave,
  onCancel,
  isEditing = false,
}: BenefitFormProps) {
  const canSave = benefit.title.trim() !== '' && benefit.description.trim() !== '';

  return (
    <Card className={isEditing ? 'border border-gray-200' : 'border-2 border-primary-green'}>
      {!isEditing && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Nowa korzyść
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={`space-y-4 ${!isEditing ? 'pt-0' : ''}`}>
        <div className="space-y-2">
          <Label>Tytuł</Label>
          <Input
            value={benefit.title}
            onChange={e => onBenefitChange({ title: e.target.value })}
            placeholder="Tytuł korzyści"
          />
        </div>

        <div className="space-y-2">
          <Label>Opis</Label>
          <Textarea
            value={benefit.description}
            onChange={e => onBenefitChange({ description: e.target.value })}
            placeholder="Szczegółowy opis korzyści"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Ikona</Label>
            <Select value={benefit.icon} onValueChange={value => onBenefitChange({ icon: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {iconOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Kategoria</Label>
            <Select
              value={benefit.category}
              onValueChange={value => onBenefitChange({ category: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Kolejność</Label>
          <Input
            type="number"
            value={benefit.order}
            onChange={e => onBenefitChange({ order: parseInt(e.target.value) || 1 })}
            min="1"
          />
        </div>

        {isEditing && (
          <div className="flex items-center space-x-2">
            <Switch
              checked={benefit.isActive}
              onCheckedChange={checked => onBenefitChange({ isActive: checked })}
            />
            <Label>Aktywna</Label>
          </div>
        )}

        <div className="flex gap-2">
          <Button onClick={onSave} disabled={!canSave}>
            <Save className="h-4 w-4 mr-2" />
            Zapisz
          </Button>
          <Button variant="outline" onClick={onCancel}>
            <X className="h-4 w-4 mr-2" />
            Anuluj
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
