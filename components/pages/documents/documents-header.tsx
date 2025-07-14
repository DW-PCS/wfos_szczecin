import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface DocumentsHeaderProps {
  programId: string;
  programName: string;
}

export function DocumentsHeader({ programId, programName }: DocumentsHeaderProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href={`/programy/${programId}`}>
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Powrót do programu
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Dokumenty - {programName}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Pobierz wszystkie niezbędne dokumenty, formularze i materiały informacyjne
          </p>
        </div>
      </div>
    </section>
  );
}
