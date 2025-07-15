import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { HeroSettings } from '@/types/admin/admin-homepage';

interface SliderManagementCardProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
}

export function SliderManagementCard({
  heroSettings,
  updateHeroSettings,
  handleSaveHeroContent,
}: SliderManagementCardProps) {
  const toggleSlider = () => {
    updateHeroSettings({ sliderEnabled: !heroSettings.sliderEnabled });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Zarządzanie sliderem banerów</CardTitle>
            <CardDescription>Dodawaj, edytuj i zarządzaj slajdami w sekcji hero</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="slider-enabled" className="text-sm font-medium">
              Włącz slider
            </Label>
            <Switch
              id="slider-enabled"
              checked={heroSettings.sliderEnabled || false}
              onCheckedChange={toggleSlider}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* <AddSlideForm heroSettings={heroSettings} updateHeroSettings={updateHeroSettings} />

        <SlidesList heroSettings={heroSettings} updateHeroSettings={updateHeroSettings} /> */}

        <Button onClick={handleSaveHeroContent} className="w-full">
          Zapisz zmiany slidera
        </Button>
      </CardContent>
    </Card>
  );
}
