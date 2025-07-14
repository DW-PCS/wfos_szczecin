import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroSettings } from '@/types/admin/admin-homepage';
import { HeroImageUpload } from './hero-image-upload';
import { HeroSearchPlaceholderField } from './hero-search-placeholder-field';
import { HeroSubtitleField } from './hero-subtitle-field';
import { HeroTitleField } from './hero-title-field';
import { SaveButton } from './save-button';

interface HeroContentCardProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
  handleHeroImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  removeHeroImage: () => void;
  heroImageRef: React.RefObject<HTMLInputElement | null>;
}

export function HeroContentCard({
  heroSettings,
  updateHeroSettings,
  handleSaveHeroContent,
  handleHeroImageUpload,
  removeHeroImage,
  heroImageRef,
}: HeroContentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edycja sekcji głównej</CardTitle>
        <CardDescription>Zarządzaj tytułem, opisem i obrazem tła sekcji hero</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <HeroTitleField
          value={heroSettings.title}
          onChange={value => updateHeroSettings({ title: value })}
        />

        <HeroSubtitleField
          value={heroSettings.subtitle}
          onChange={value => updateHeroSettings({ subtitle: value })}
        />

        <HeroSearchPlaceholderField
          value={heroSettings.searchPlaceholder}
          onChange={value => updateHeroSettings({ searchPlaceholder: value })}
        />

        <HeroImageUpload
          heroImage={heroSettings.heroImage}
          onImageUpload={handleHeroImageUpload}
          onRemoveImage={removeHeroImage}
          imageRef={heroImageRef}
        />

        <SaveButton onClick={handleSaveHeroContent} />
      </CardContent>
    </Card>
  );
}
