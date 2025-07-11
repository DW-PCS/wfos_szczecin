import { TabsContent } from '@/components/ui/tabs';
import { HeroContentCard } from './hero-content-card';
import { HeroSettings } from '@/types/admin-homepage';

interface AdminHeroContentTabProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
  handleHeroImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  removeHeroImage: () => void;
  heroImageRef: React.RefObject<HTMLInputElement | null>;
}

export function AdminHeroContentTab({
  heroSettings,
  updateHeroSettings,
  handleSaveHeroContent,
  handleHeroImageUpload,
  removeHeroImage,
  heroImageRef,
}: AdminHeroContentTabProps) {
  return (
    <TabsContent value="content" className="space-y-4 pt-4">
      <HeroContentCard
        heroSettings={heroSettings}
        updateHeroSettings={updateHeroSettings}
        handleSaveHeroContent={handleSaveHeroContent}
        handleHeroImageUpload={handleHeroImageUpload}
        removeHeroImage={removeHeroImage}
        heroImageRef={heroImageRef}
      />
    </TabsContent>
  );
}
