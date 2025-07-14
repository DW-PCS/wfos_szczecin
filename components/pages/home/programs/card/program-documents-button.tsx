import { Button } from '@/components/ui/button';
import { Program } from '@/types/program';
import { Download } from 'lucide-react';
import Link from 'next/link';

interface ProgramDocumentsButtonProps {
  program: Program;
  isClosedOrFinished: boolean;
}

export function ProgramDocumentsButton({
  program,
  isClosedOrFinished,
}: ProgramDocumentsButtonProps) {
  const buttonClass = `flex-1 rounded-xl ${
    isClosedOrFinished
      ? 'border-gray-300 text-gray-400 hover:bg-gray-100 cursor-not-allowed'
      : 'border-primary-green text-primary-green hover:bg-primary-green hover:text-white'
  }`;

  return (
    <Button
      variant="outline"
      className={buttonClass}
      asChild={!isClosedOrFinished}
      disabled={isClosedOrFinished}
      aria-label={`Pobierz dokumenty programu ${program.name}`}
    >
      {isClosedOrFinished ? (
        <span className="inline-flex">
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Dokumenty
        </span>
      ) : (
        <Link href={`/dokumenty/${program.id}`}>
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Dokumenty
        </Link>
      )}
    </Button>
  );
}
