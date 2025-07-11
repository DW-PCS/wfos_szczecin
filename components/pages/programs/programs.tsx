'use client';

import { Program } from '@/types/program';
import { useMemo, useState } from 'react';
import { ProgramsHeroSection } from './programs-hero-section';
import { ProgramsMainContent } from './programs-main-content';

interface ProgramsPageProps {
  programs: Program[];
}

export default function ProgramsPage({ programs }: ProgramsPageProps) {
  // TODO:
  // - Move filtering logic to server-side API endpoints with search params
  // - Replace activeCategory/searchTerm state with URL searchParams
  // - Update ProgramsMainContent to use server actions for filter changes
  // - Implement proper caching and revalidation for filtered program data
  // - Consider using Suspense boundaries for loading states during filter changes
  
  const [activeCategory, setActiveCategory] = useState('osoba-fizyczna');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesCategory = program.beneficiaryCategories?.includes(activeCategory);
      const matchesSearch =
        searchTerm === '' ||
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [programs, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgramsHeroSection />

      <ProgramsMainContent
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        filteredPrograms={filteredPrograms}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}
