import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ViewAllProgramsButtonProps {
  text?: string;
  href?: string;
  ariaLabel?: string;
}

export function ViewAllProgramsButton({
  text = 'Zobacz wszystkie programy',
  href = '/oferta',
  ariaLabel = 'Zobacz wszystkie dostępne programy dofinansowania',
}: ViewAllProgramsButtonProps) {
  return (
    <div className="text-center">
      <Button
        size="lg"
        className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl"
        asChild
        aria-label={ariaLabel}
      >
        <Link href={href}>
          {text}
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
