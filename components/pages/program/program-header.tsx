import { Button } from '@/components/ui/button';
import { ProgramPageType } from '@/types/program';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProgramBadges } from './program-badges';
import { ProgramStats } from './program-stats';

interface ProgramHeaderProps {
  program: ProgramPageType;
}

export function ProgramHeader({ program }: ProgramHeaderProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/programy">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Powrót do programów
            </Button>
          </Link>

          <ProgramBadges program={program} />

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{program.name}</h1>

          <p className="text-xl text-gray-600 mb-8">{program.description}</p>

          <ProgramStats program={program} />
        </div>
      </div>
    </section>
  );
}
