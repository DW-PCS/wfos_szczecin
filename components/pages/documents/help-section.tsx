import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';

export function HelpSection() {
  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold text-primary-navy mb-4">Potrzebujesz pomocy?</h3>
      <p className="text-gray-700 mb-4">
        Nasz zespół doradców pomoże Ci wypełnić dokumenty i przygotować wniosek
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/kontakt">
          <Button variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            Skontaktuj się z doradcą
          </Button>
        </Link>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          Pobierz instrukcję
        </Button>
      </div>
    </div>
  );
}
