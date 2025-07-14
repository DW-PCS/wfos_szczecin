'use client';

import { initialPrograms } from '@/constants/programs';
import { useProgramsPageState } from '@/hooks/use-programs-page-state';
import { useState } from 'react';
import { ProgramsCallToAction } from './programs-call-to-action';
import { ProgramsFilters } from './programs-filters';
import { ProgramsGrid } from './programs-grid';
import { ProgramsPageHero } from './programs-page-hero';

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const hasHydrated = true;

  const { filteredPrograms, categories, isLoading } = useProgramsPageState(
    initialPrograms,
    selectedCategory,
    hasHydrated
  );

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ProgramsPageHero />

        <ProgramsFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProgramsGrid
          programs={filteredPrograms}
          isLoading={isLoading}
          hasResults={filteredPrograms.length > 0}
        />

        <ProgramsCallToAction />
      </main>
    </div>
  );
}
