import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ContactPageContent } from '@/types/admin/admin-contact';
import { HeroTabForm } from '../form/hero-tab-form';

interface HeroTabProps {
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
}

export function HeroTab({ contactContent, setContactContent, isEditing }: HeroTabProps) {
  return (
    <TabsContent value="hero" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja Hero</CardTitle>
          <CardDescription>Zarządzaj głównym tytułem i opisem strony kontakt</CardDescription>
        </CardHeader>
        <CardContent>
          <HeroTabForm
            hero={contactContent.hero}
            onUpdate={hero => setContactContent({ ...contactContent, hero })}
            isEditing={isEditing}
          />
        </CardContent>
      </Card>
    </TabsContent>
  );
}
