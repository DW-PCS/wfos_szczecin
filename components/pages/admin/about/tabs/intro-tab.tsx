import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { AboutContent } from '@/types/admin/admin-about';

interface IntroTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function IntroTab({ aboutContent, setAboutContent, isEditing }: IntroTabProps) {
  return (
    <TabsContent value="intro" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja wprowadzająca</CardTitle>
          <CardDescription>Edytuj główną sekcję wprowadzającą</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="introBadge">Tekst badge</Label>
            <Input
              id="introBadge"
              value={aboutContent.intro.badge}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  intro: { ...aboutContent.intro, badge: e.target.value },
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="introTitle">Tytuł</Label>
              <Input
                id="introTitle"
                value={aboutContent.intro.title}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    intro: { ...aboutContent.intro, title: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="introHighlight">Wyróżnione słowo</Label>
              <Input
                id="introHighlight"
                value={aboutContent.intro.highlightedWord}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    intro: { ...aboutContent.intro, highlightedWord: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="introDescription">Opis</Label>
            <Textarea
              id="introDescription"
              value={aboutContent.intro.description}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  intro: { ...aboutContent.intro, description: e.target.value },
                })
              }
              disabled={!isEditing}
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ctaText">Tekst przycisku</Label>
              <Input
                id="ctaText"
                value={aboutContent.intro.ctaText}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    intro: { ...aboutContent.intro, ctaText: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ctaLink">Link przycisku</Label>
              <Input
                id="ctaLink"
                value={aboutContent.intro.ctaLink}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    intro: { ...aboutContent.intro, ctaLink: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
