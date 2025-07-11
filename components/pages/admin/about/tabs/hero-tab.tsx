import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin-about';

interface HeroTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function HeroTab({ aboutContent, setAboutContent, isEditing }: HeroTabProps) {
  return (
    <TabsContent value="hero" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja Hero</CardTitle>
          <CardDescription>Zarządzaj głównym obrazem i tytułem strony</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Tytuł</Label>
            <Input
              id="heroTitle"
              value={aboutContent.hero.title}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  hero: { ...aboutContent.hero, title: e.target.value },
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroImage">URL obrazu tła</Label>
            <Input
              id="heroImage"
              value={aboutContent.hero.backgroundImage}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  hero: { ...aboutContent.hero, backgroundImage: e.target.value },
                })
              }
              disabled={!isEditing}
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
