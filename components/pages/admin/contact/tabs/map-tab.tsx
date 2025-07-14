import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ContactPageContent } from '@/types/admin/admin-contact';
import { MapTabForm } from '../form/map-tab-form';

interface MapTabProps {
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
}

export function MapTab({ contactContent, setContactContent, isEditing }: MapTabProps) {
  return (
    <TabsContent value="map" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mapa</CardTitle>
          <CardDescription>Zarządzaj mapą i jej opisem</CardDescription>
        </CardHeader>
        <CardContent>
          <MapTabForm
            map={contactContent.map}
            onUpdate={map => setContactContent({ ...contactContent, map })}
            isEditing={isEditing}
          />
        </CardContent>
      </Card>
    </TabsContent>
  );
}
