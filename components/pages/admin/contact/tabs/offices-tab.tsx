import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ContactPageContent, ContactPageOffice } from '@/types/admin/admin-contact';
import { Building, Plus } from 'lucide-react';
import { OtherOfficesForm } from '../form/other-offices-form';
import { OfficeCard } from '../office-card';

interface OfficesTabProps {
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
  addOffice: () => void;
  removeOffice: (id: number) => void;
  updateOffice: (id: number, updates: Partial<ContactPageOffice>) => void;
}

export function OfficesTab({
  contactContent,
  setContactContent,
  isEditing,
  addOffice,
  removeOffice,
  updateOffice,
}: OfficesTabProps) {
  const otherOffices = contactContent.offices.filter(office => !office.isHeadquarters);

  return (
    <TabsContent value="offices" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja Pozostałe Biura</CardTitle>
          <CardDescription>Zarządzaj tytułem i opisem sekcji pozostałych biur</CardDescription>
        </CardHeader>
        <CardContent>
          <OtherOfficesForm
            otherOffices={contactContent.otherOffices}
            onUpdate={otherOffices => setContactContent({ ...contactContent, otherOffices })}
            isEditing={isEditing}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Pozostałe Biura</CardTitle>
              <CardDescription>Zarządzaj biurami terenowymi i punktami obsługi</CardDescription>
            </div>
            {isEditing && (
              <Button onClick={addOffice} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Dodaj biuro
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {otherOffices.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Building className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Brak biur do wyświetlenia</p>
              {isEditing && (
                <p className="text-sm mt-2">Kliknij "Dodaj biuro" aby dodać nowe biuro</p>
              )}
            </div>
          ) : (
            otherOffices.map(office => (
              <OfficeCard
                key={office.id}
                office={office}
                onUpdate={updates => updateOffice(office.id, updates)}
                onRemove={() => removeOffice(office.id)}
                isEditing={isEditing}
                showRemoveButton={true}
              />
            ))
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
