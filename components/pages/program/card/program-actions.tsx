import { Button } from '@/components/ui/button';
import { Program, ProgramPageType } from '@/types/program';
import { Download, ExternalLink, Users } from 'lucide-react';
import Link from 'next/link';

interface ProgramActionsProps {
  program: ProgramPageType;
}

export function ProgramActions({ program }: ProgramActionsProps) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Link href={`/dokumenty/${program.id}`} className="flex-1">
        <Button size="lg" className="w-full">
          <Download className="h-4 w-4 mr-2" />
          Pobierz dokumenty
        </Button>
      </Link>
      {program.programLink && (
        <a href={program.programLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="lg" className="w-full">
            <ExternalLink className="h-4 w-4 mr-2" />
            Strona programu
          </Button>
        </a>
      )}
      <Link href="/kontakt" className="flex-1">
        <Button variant="outline" size="lg" className="w-full">
          <Users className="h-4 w-4 mr-2" />
          Skontaktuj się z doradcą
        </Button>
      </Link>
    </div>
  );
}
