import { Input } from '@/components/ui/input';
import { cn } from '@/lib/cn';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultCount: number;
  itemType: string;
  placeholder?: string;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  resultCount,
  itemType,
  placeholder = 'Szukaj programów...',
}: SearchBarProps) {
  // TODO:: Convert to Server Component with URL-based search
  // - Implement server action for search with proper debouncing
  // - Move resultCount calculation to server-side
  // - Add search clear functionality via URL manipulation
  // - Add loading states during search transitions

  const getResultLabel = (count: number, itemType: string) => {
    return count === 1 ? itemType : `${itemType}ów`;
  };

  const label = getResultLabel(resultCount, itemType);
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="pl-10 rounded-xl border-gray-200 focus:border-primary-green focus:ring-primary-green/20"
          />
          <X
            className={cn(
              'hidden absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer',
              searchTerm.length >= 1 && 'block'
            )}
            onClick={() => onSearchChange('')}
          />
        </div>
        <div className="text-sm text-gray-600">
          {resultCount} {label}
        </div>
      </div>
    </div>
  );
}

