import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { HeroSettings } from '@/types/admin/admin-homepage';
import { Settings } from 'lucide-react';
import { SaveButton } from '../save-button';

interface SliderSettingsCardProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
}

export function SliderSettingsCard({
  heroSettings,
  updateHeroSettings,
  handleSaveHeroContent,
}: SliderSettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Ustawienia slidera
        </CardTitle>
        <CardDescription>Skonfiguruj zachowanie i wygląd slidera</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="autoplay-interval">
                Interwał automatycznego przewijania (sekundy)
              </Label>
              <Input
                id="autoplay-interval"
                type="number"
                min="0"
                max="60"
                value={heroSettings.autoPlayInterval || 0}
                onChange={e =>
                  updateHeroSettings({ autoPlayInterval: parseInt(e.target.value) || 0 })
                }
              />
              <p className="text-sm text-gray-500">Ustaw 0 aby wyłączyć automatyczne przewijanie</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Pokaż strzałki nawigacji</Label>
                <p className="text-sm text-gray-500">Wyświetl przyciski poprzedni/następny</p>
              </div>
              <Switch
                checked={heroSettings.showNavigation || false}
                onCheckedChange={checked => updateHeroSettings({ showNavigation: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Pokaż wskaźniki slajdów</Label>
                <p className="text-sm text-gray-500">Wyświetl kropki na dole slidera</p>
              </div>
              <Switch
                checked={heroSettings.showIndicators || false}
                onCheckedChange={checked => updateHeroSettings({ showIndicators: checked })}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-4">Podgląd ustawień</h4>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  heroSettings.sliderEnabled ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
              <span className="text-sm">
                Slider: {heroSettings.sliderEnabled ? 'Włączony' : 'Wyłączony'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  (heroSettings.autoPlayInterval || 0) > 0 ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              />
              <span className="text-sm">
                Autoprzewija:{' '}
                {(heroSettings.autoPlayInterval || 0) > 0
                  ? `Co ${heroSettings.autoPlayInterval}s`
                  : 'Wyłączone'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  heroSettings.showNavigation ? 'bg-purple-500' : 'bg-gray-400'
                }`}
              />
              <span className="text-sm">
                Nawigacja: {heroSettings.showNavigation ? 'Włączona' : 'Wyłączona'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  heroSettings.showIndicators ? 'bg-orange-500' : 'bg-gray-400'
                }`}
              />
              <span className="text-sm">
                Wskaźniki: {heroSettings.showIndicators ? 'Włączone' : 'Wyłączone'}
              </span>
            </div>
          </div>
        </div>

        <SaveButton onClick={handleSaveHeroContent} text="Zapisz ustawienia slidera" />
      </CardContent>
    </Card>
  );
}
