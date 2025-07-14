import { SearchBar } from '@/components/features';
import { Program } from '@/types/program';
import { ProgramsCategoryHeader } from './programs-category-header';
import { ProgramsHelpSection } from './programs-help-section';
import { ProgramsList } from './programs-list';

interface ProgramsContentAreaProps {
  activeCategory: string;
  searchTerm: string;
  filteredPrograms: Program[];
  onSearchChange: (term: string) => void;
}

export function ProgramsContentArea({
  activeCategory,
  searchTerm,
  filteredPrograms,
  onSearchChange,
}: ProgramsContentAreaProps) {
  return (
    <div className="lg:col-span-3">
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        resultCount={filteredPrograms.length}
        itemType="program"
      />

      <ProgramsCategoryHeader
        activeCategory={activeCategory}
        resultCount={filteredPrograms.length}
      />

      <ProgramsList programs={filteredPrograms} searchTerm={searchTerm} />

      <ProgramsHelpSection />
    </div>
  );
}
