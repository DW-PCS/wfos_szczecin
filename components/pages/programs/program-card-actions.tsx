import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getStatusDisplay } from '@/lib/utils/program-helpers';
import { Program } from '@/types/program';
import { Download } from 'lucide-react';
import Link from 'next/link';

interface ProgramCardActionsProps {
  program: Program;
  isClosedOrFinished: boolean;
}

export function ProgramCardActions({ program, isClosedOrFinished }: ProgramCardActionsProps) {
  const isOpen = getStatusDisplay(program.status) === 'Otwarty';

  const getInfoLink = () => {
    if (program.linkedPageSlug) {
      return `/programy/${program.linkedPageSlug}`;
    }
    return program.programLink || `/programy/${program.id}`;
  };

  return (
    <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row">
      <Button
        className={cn(
          'transform rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl',
          isClosedOrFinished
            ? 'cursor-not-allowed bg-gray-400 text-white hover:bg-gray-500'
            : 'bg-primary-green text-white hover:bg-primary-lime'
        )}
        asChild={!isClosedOrFinished}
        disabled={isClosedOrFinished}
      >
        {isClosedOrFinished ? (
          <span>Więcej informacji</span>
        ) : (
          <Link href={getInfoLink()}>Więcej informacji</Link>
        )}
      </Button>

      {isOpen && !isClosedOrFinished && (
        <Button
          variant="outline"
          className="rounded-xl border-primary-green px-6 py-3 font-semibold text-primary-green transition-all duration-300 hover:bg-primary-green hover:text-white"
          asChild
        >
          <Link href={`/wniosek/${program.id}`}>Złóż wniosek</Link>
        </Button>
      )}

      <Button
        variant="outline"
        className={cn(
          'rounded-xl px-6 py-3 font-medium transition-all duration-300',
          isClosedOrFinished
            ? 'cursor-not-allowed border-gray-300 text-gray-400 hover:bg-gray-100'
            : 'border-gray-200 text-gray-600 hover:border-primary-green hover:text-primary-green'
        )}
        asChild={!isClosedOrFinished}
        disabled={isClosedOrFinished}
      >
        {isClosedOrFinished ? (
          <span className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Dokumenty
          </span>
        ) : (
          <Link href={`/dokumenty/${program.id}`} className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Dokumenty
          </Link>
        )}
      </Button>
    </div>
  );
}
