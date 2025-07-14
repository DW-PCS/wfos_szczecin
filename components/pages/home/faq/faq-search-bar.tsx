import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface FAQSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function FAQSearchBar({
  searchQuery,
  onSearchChange,
  placeholder = 'Szukaj w pytaniach...',
  className = 'max-w-md mx-auto relative mb-12',
}: FAQSearchBarProps) {
  return (
    <div className={className}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-3 w-full rounded-xl border-gray-200 focus:border-primary-green focus:ring-primary-green/20 bg-white shadow-sm"
      />
    </div>
  );
}
