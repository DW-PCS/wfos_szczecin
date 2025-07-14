import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function ContactInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Informacje kontaktowe
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-gray-500">Instytucja</div>
            <div className="text-lg text-gray-900">
              Wojewódzki Fundusz Ochrony Środowiska
              <br />i Gospodarki Wodnej w Szczecinie
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Adres</div>
            <div className="text-lg text-gray-900">
              ul. Wały Chrobrego 4<br />
              70-500 Szczecin
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Telefon</div>
            <div className="text-lg text-gray-900">+48 91 484 67 00</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Email</div>
            <div className="text-lg text-gray-900">wfos@wfos.szczecin.pl</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
