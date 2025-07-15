import { TabsContent } from '@/components/ui/tabs';
import { HeroSettings } from '@/types/admin/admin-homepage';
import { SliderSettingsCard } from '../cards/slider-settings-card';

interface AdminSliderSettingsTabProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
}

export function AdminSliderSettingsTab({
  heroSettings,
  updateHeroSettings,
  handleSaveHeroContent,
}: AdminSliderSettingsTabProps) {
  return (
    <TabsContent value="slider-settings" className="space-y-4 pt-4">
      <SliderSettingsCard
        heroSettings={heroSettings}
        updateHeroSettings={updateHeroSettings}
        handleSaveHeroContent={handleSaveHeroContent}
      />
    </TabsContent>
  );
}
