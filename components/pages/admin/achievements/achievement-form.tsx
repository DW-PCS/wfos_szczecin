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
import { Achievement } from '@/types/admin/admin-about';
import { BarChart3, Save, X } from 'lucide-react';

const iconOptions = [
  { value: 'BarChart3', label: 'Wykres słupkowy' },
  { value: 'DollarSign', label: 'Dolar' },
  { value: 'Users', label: 'Użytkownicy' },
  { value: 'Leaf', label: 'Liść' },
  { value: 'Droplets', label: 'Kropla' },
  { value: 'Sun', label: 'Słońce' },
  { value: 'Target', label: 'Cel' },
  { value: 'Award', label: 'Nagroda' },
  { value: 'Building', label: 'Budynek' },
];

const placementOptions = [
  { value: 'homepage', label: 'Strona główna' },
  { value: 'about', label: 'Strona O nas' },
  { value: 'footer', label: 'Stopka' },
  { value: 'hero', label: 'Sekcja Hero' },
  { value: 'custom', label: 'Niestandardowe' },
];

interface AchievementFormProps {
  achievement: Achievement;
  onAchievementChange: (data: Partial<Achievement>) => void;
  onSave: () => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export function AchievementForm({
  achievement,
  onAchievementChange,
  onSave,
  onCancel,
  isEditing = false,
}: AchievementFormProps) {
  const canSave = achievement.number.trim() !== '' && achievement.label.trim() !== '';

  return (
    <Card className={isEditing ? 'border border-gray-200' : 'border-2 border-primary-green'}>
      {!isEditing && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Nowa statystyka
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={`space-y-4 ${!isEditing ? 'pt-0' : ''}`}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Liczba/Wartość</Label>
            <Input
              value={achievement.number}
              onChange={e => onAchievementChange({ number: e.target.value })}
              placeholder="np. 1000+, 50M+"
            />
          </div>
          <div className="space-y-2">
            <Label>Ikona</Label>
            <Select
              value={achievement.icon}
              onValueChange={value => onAchievementChange({ icon: value })}
            >
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
        </div>

        <div className="space-y-2">
          <Label>Opis</Label>
          <Input
            value={achievement.label}
            onChange={e => onAchievementChange({ label: e.target.value })}
            placeholder="Opis statystyki"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Umiejscowienie</Label>
            <Select
              value={achievement.placement}
              onValueChange={value => onAchievementChange({ placement: value })}
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

          <div className="space-y-2">
            <Label>Kolejność</Label>
            <Input
              type="number"
              value={achievement.order}
              onChange={e => onAchievementChange({ order: parseInt(e.target.value) || 1 })}
              min="1"
            />
          </div>
        </div>

        {achievement.placement === 'hero' && (
          <div className="space-y-2">
            <Label>Kolor (opcjonalny)</Label>
            <Input
              value={achievement.color || ''}
              onChange={e => onAchievementChange({ color: e.target.value })}
              placeholder="np. text-primary-lime"
            />
          </div>
        )}

        {isEditing && (
          <div className="flex items-center space-x-2">
            <Switch
              checked={achievement.active}
              onCheckedChange={checked => onAchievementChange({ active: checked })}
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
