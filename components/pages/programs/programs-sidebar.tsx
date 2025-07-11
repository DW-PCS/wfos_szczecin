import { programCategories } from '@/constants';
import { cn } from '@/lib/utils';

interface ProgramsSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProgramsSidebar({ activeCategory, onCategoryChange }: ProgramsSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-20 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
        <h3 className="mb-6 text-lg font-bold text-primary-navy">Kategorie beneficjentów</h3>

        <nav className="space-y-2">
          {programCategories.map(category => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  'flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'bg-primary-green text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-green'
                )}
              >
                <IconComponent className="h-5 w-5 flex-shrink-0" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
