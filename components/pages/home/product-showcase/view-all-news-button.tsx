import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ViewAllNewsButtonProps {
  text?: string;
  href?: string;
  ariaLabel?: string;
}

export function ViewAllNewsButton({
  text = 'Wszystkie aktualności',
  href = '/aktualnosci',
  ariaLabel = 'Zobacz wszystkie aktualności',
}: ViewAllNewsButtonProps) {
  return (
    <div className="text-center">
      <Button
        size="lg"
        className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        asChild
        aria-label={ariaLabel}
      >
        <Link href={href}>
          {text}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
