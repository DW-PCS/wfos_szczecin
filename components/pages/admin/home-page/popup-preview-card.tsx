import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PopupSettings } from '@/types/admin/admin-homepage';
import { X } from 'lucide-react';

interface PopupPreviewCardProps {
  popupSettings: PopupSettings;
}

export function PopupPreviewCard({ popupSettings }: PopupPreviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Podgląd popupu</CardTitle>
        <CardDescription>Tak będzie wyglądał popup na stronie głównej</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg p-6 max-w-md mx-auto">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">{popupSettings.title || 'Tytuł popupu'}</h3>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
            </Button>
          </div>
          {popupSettings.image && (
            <div className="mb-4 rounded-md bg-gray-100 h-40 flex items-center justify-center">
              <img
                src={popupSettings.popupImage}
                alt="Hero background preview"
                className="max-w-full h-48 object-cover rounded-lg mx-auto"
              />
            </div>
          )}
          <p className="text-sm text-gray-600 mb-4">{popupSettings.content || 'Treść popupu...'}</p>
          <div className="flex justify-end">
            <Button className="bg-primary-green hover:bg-primary-green/90" size="sm">
              Zamknij
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
