'use client';

import { initialPrograms } from '@/constants';
import { ViewAllProgramsButton } from './card/view-all-programs-button';
import { ProgramsList } from './programs-list';
import { ProgramsSectionHeader } from './programs-section-header';

export default function ProgramsSection() {
  const programs = initialPrograms.slice(0, 4);
  const isLoading = false;

  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4">
        <ProgramsSectionHeader />
        <ProgramsList programs={programs} isLoading={isLoading} />
        <ViewAllProgramsButton />
      </div>
    </section>
  );
}
