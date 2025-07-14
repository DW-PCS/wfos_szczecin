import { Button } from '@/components/ui/button';
import { Program } from '@/types/program';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProgramInfoButtonProps {
  program: Program;
  isClosedOrFinished: boolean;
}

export function ProgramInfoButton({ program, isClosedOrFinished }: ProgramInfoButtonProps) {
  const buttonClass = `flex-1 rounded-xl ${
    isClosedOrFinished
      ? 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
      : 'bg-primary-green hover:bg-primary-green/90'
  }`;

  const href = program.linkedPageSlug
    ? `/programy/${program.linkedPageSlug}`
    : program.programLink || `/programy/${program.id}`;

  return (
    <Button
      className={buttonClass}
      asChild={!isClosedOrFinished}
      disabled={isClosedOrFinished}
      aria-label={`Więcej informacji o programie ${program.name}`}
    >
      {isClosedOrFinished ? (
        <span className="inline-flex items-center">
          Więcej informacji
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </span>
      ) : (
        <Link href={href}>
          Więcej informacji
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </Button>
  );
}
