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
import { format } from 'date-fns';

const newsCategories = [
  'Ogłoszenia',
  'Programy dofinansowania',
  'Aktualności prawne',
  'Konkursy',
  'Informacje',
];

export interface NewsSettings {
  category: string;
  author: string;
  featured: boolean;
  published: boolean;
}

interface NewsSettingsSidebarProps {
  settings: NewsSettings;
  publishedAt?: string;
  onSettingsChange: (settings: Partial<NewsSettings>) => void;
  disabled?: boolean;
}

export function NewsSettingsSidebar({
  settings,
  publishedAt,
  onSettingsChange,
}: NewsSettingsSidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ustawienia publikacji</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="news-category">Kategoria</Label>
          <Select
            value={settings.category}
            onValueChange={value => onSettingsChange({ category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Wybierz kategorię" />
            </SelectTrigger>
            <SelectContent>
              {newsCategories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="news-author">Autor</Label>
          <Input
            id="news-author"
            value={settings.author}
            onChange={e => onSettingsChange({ author: e.target.value })}
            placeholder="Wprowadź nazwę autora"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="featured">Artykuł wyróżniony</Label>
            <p className="text-sm text-gray-500">Wyświetl w sekcji wyróżnionych</p>
          </div>
          <Switch
            id="featured"
            checked={settings.featured}
            onCheckedChange={checked => onSettingsChange({ featured: checked })}
          />
        </div>

        <div className="grid gap-2">
          <Label>Data publikacji</Label>
          <p className="text-sm text-gray-600">
            {publishedAt
              ? format(new Date(publishedAt), 'dd.MM.yyyy')
              : format(new Date(), 'dd.MM.yyyy')}
          </p>
        </div>

        <div className="grid gap-2">
          <Label>Status</Label>
          <p className="text-sm text-gray-600 capitalize">
            {settings.published ? 'Opublikowany' : 'Szkic'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
