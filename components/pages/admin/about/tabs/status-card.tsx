import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AboutContent } from '@/types/admin-about';
import { format } from 'date-fns';

interface StatusCardProps {
  aboutContent: AboutContent;
}

export function StatusCard({ aboutContent }: StatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status strony</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">
              Ostatnia aktualizacja: {format(new Date(aboutContent.updatedAt), 'dd.MM.yyyy HH:mm')}
            </p>
          </div>
          <Badge variant={aboutContent.active ? 'default' : 'secondary'}>
            {aboutContent.active ? 'Aktywna' : 'Nieaktywna'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
