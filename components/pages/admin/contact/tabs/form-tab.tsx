import { TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactPageContent } from '@/types/admin/admin-contact';
import { FormTabForm } from '../form/form-tab-form';


interface FormTabProps {
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
}

export function FormTab({ contactContent, setContactContent, isEditing }: FormTabProps) {
  return (
    <TabsContent value="form" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Formularz kontaktowy</CardTitle>
          <CardDescription>Zarządzaj etykietami i tekstami formularza</CardDescription>
        </CardHeader>
        <CardContent>
          <FormTabForm
            form={contactContent.form}
            onUpdate={form => setContactContent({ ...contactContent, form })}
            isEditing={isEditing}
          />
        </CardContent>
      </Card>
    </TabsContent>
  );
}
