import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadAllSection() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pobierz wszystkie dokumenty</h3>
          <p className="text-gray-600">Archiwum ZIP zawierające wszystkie dokumenty programu</p>
        </div>
        <Button size="lg">
          <Download className="h-4 w-4 mr-2" />
          Pobierz wszystko (ZIP)
        </Button>
      </div>
    </div>
  );
}
