import { Button } from '@/components/ui/button';
import { ProgramCategory } from '@/types/program';

interface ProgramsFiltersProps {
  categories: ProgramCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProgramsFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProgramsFiltersProps) {
  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
