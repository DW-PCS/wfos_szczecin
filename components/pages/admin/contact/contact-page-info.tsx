import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactPageContent } from '@/types/admin/admin-contact';
import { format } from 'date-fns';

interface ContactPageInfoProps {
  contactContent: ContactPageContent;
}

export function ContactPageInfo({ contactContent }: ContactPageInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informacje o stronie</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Utworzono:</strong>{' '}
            {format(new Date(contactContent.createdAt), 'dd.MM.yyyy HH:mm')}
          </div>
          <div>
            <strong>Ostatnia aktualizacja:</strong>{' '}
            {format(new Date(contactContent.updatedAt), 'dd.MM.yyyy HH:mm')}
          </div>
          <div>
            <strong>Status:</strong>{' '}
            <Badge variant={contactContent.active ? 'default' : 'secondary'}>
              {contactContent.active ? 'Aktywna' : 'Nieaktywna'}
            </Badge>
          </div>
          <div>
            <strong>Liczba biur:</strong> {contactContent.offices.length}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
