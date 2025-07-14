import { Button } from '@/components/ui/button';
import { Program } from '@/types/program';
import { FileText } from 'lucide-react';
import Link from 'next/link';

interface ProgramCardActionsProps {
  program: Program;
}

export function ProgramCardActions({ program }: ProgramCardActionsProps) {
  return (
    <div className="flex gap-2 px-6 pb-6">
      <Link href={`/programy/${program.id}`} className="flex-1">
        <Button className="w-full">Szczegóły</Button>
      </Link>
      <Link href={`/dokumenty/${program.id}`}>
        <Button variant="outline" size="icon">
          <FileText className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
