import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { AboutContent } from '@/types/admin/admin-about';

interface CtaTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function CtaTab({ aboutContent, setAboutContent, isEditing }: CtaTabProps) {
  return (
    <TabsContent value="cta" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja CTA</CardTitle>
          <CardDescription>Zarządzaj sekcją call-to-action na końcu strony</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ctaTitle">Tytuł</Label>
            <Input
              id="ctaTitle"
              value={aboutContent.cta.title}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  cta: { ...aboutContent.cta, title: e.target.value },
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ctaDescription">Opis</Label>
            <Textarea
              id="ctaDescription"
              value={aboutContent.cta.description}
              onChange={e =>
                setAboutContent({
                  ...aboutContent,
                  cta: { ...aboutContent.cta, description: e.target.value },
                })
              }
              disabled={!isEditing}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primaryButtonText">Tekst głównego przycisku</Label>
              <Input
                id="primaryButtonText"
                value={aboutContent.cta.primaryButtonText}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    cta: { ...aboutContent.cta, primaryButtonText: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primaryButtonLink">Link głównego przycisku</Label>
              <Input
                id="primaryButtonLink"
                value={aboutContent.cta.primaryButtonLink}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    cta: { ...aboutContent.cta, primaryButtonLink: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="secondaryButtonText">Tekst drugiego przycisku</Label>
              <Input
                id="secondaryButtonText"
                value={aboutContent.cta.secondaryButtonText}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    cta: { ...aboutContent.cta, secondaryButtonText: e.target.value },
                  })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondaryButtonLink">Link drugiego przycisku</Label>
              <Input
                id="secondaryButtonLink"
                value={aboutContent.cta.secondaryButtonLink}
                onChange={e =>
                  setAboutContent({
                    ...aboutContent,
                    cta: { ...aboutContent.cta, secondaryButtonLink: e.target.value },
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
