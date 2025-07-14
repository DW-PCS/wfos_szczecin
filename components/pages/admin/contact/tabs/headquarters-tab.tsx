import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ContactPageContent, ContactPageOffice } from '@/types/admin/admin-contact';
import { HeadquartersForm } from '../form/headquarters-form';
import { OfficeCard } from '../office-card';

interface HeadquartersTabProps {
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
  updateOffice: (id: number, updates: Partial<ContactPageOffice>) => void;
}

export function HeadquartersTab({
  contactContent,
  setContactContent,
  isEditing,
  updateOffice,
}: HeadquartersTabProps) {
  const headquarters = contactContent.offices.filter(office => office.isHeadquarters);

  return (
    <TabsContent value="headquarters" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja Siedziba Główna</CardTitle>
          <CardDescription>Zarządzaj tytułem i opisem sekcji siedziby głównej</CardDescription>
        </CardHeader>
        <CardContent>
          <HeadquartersForm
            headquarters={contactContent.headquarters}
            onUpdate={headquarters => setContactContent({ ...contactContent, headquarters })}
            isEditing={isEditing}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Siedziba Główna</CardTitle>
          <CardDescription>Dane siedziby głównej</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {headquarters.map(office => (
            <OfficeCard
              key={office.id}
              office={office}
              onUpdate={updates => updateOffice(office.id, updates)}
              isEditing={isEditing}
              showRemoveButton={false}
            />
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
