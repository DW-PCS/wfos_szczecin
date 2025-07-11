import { Program } from '@/types/program';
import { ProgramsContentArea } from './programs-content-area';
import { ProgramsSidebar } from './programs-sidebar';

interface ProgramsMainContentProps {
  activeCategory: string;
  searchTerm: string;
  filteredPrograms: Program[];
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
}

export function ProgramsMainContent({
  activeCategory,
  searchTerm,
  filteredPrograms,
  onCategoryChange,
  onSearchChange,
}: ProgramsMainContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <ProgramsSidebar activeCategory={activeCategory} onCategoryChange={onCategoryChange} />

        <ProgramsContentArea
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          filteredPrograms={filteredPrograms}
          onSearchChange={onSearchChange}
        />
      </div>
    </div>
  );
}
