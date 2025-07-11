import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/constants';
import { cn } from '@/lib/cn';
import { Article } from '@/types/news';
import { Search } from 'lucide-react';
import { FC } from 'react';
interface NewsFiltersProps {
  className?: string;
  handleSearchChange: (v: string) => void;
  handleCategoryChange: (v: string) => void;
  searchTerm: string;
  selectedCategory: string;
  filteredArticles: Article[];
}

export const NewsFilters: FC<NewsFiltersProps> = ({
  className = '',
  handleSearchChange,
  handleCategoryChange,
  searchTerm,
  selectedCategory,
  filteredArticles,
}) => {
  return (
    <section className={cn('py-8 border-b border-black/15', className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Szukaj aktualności..."
                value={searchTerm}
                onChange={e => handleSearchChange(e.target.value)}
                className="pl-10 w-full sm:w-auto md:w-80 border-black/15"
              />
            </div>
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full sm:w-auto md:w-48 cursor-pointer border-black/15">
                <SelectValue placeholder="Kategoria" />
              </SelectTrigger>
              <SelectContent className="bg-white border-black/15">
                {categories.map(category => (
                  <SelectItem className="cursor-pointer" key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-gray-600">
            Znaleziono {filteredArticles.length}{' '}
            {filteredArticles.length === 1 ? 'artykuł' : 'artykułów'}
          </div>
        </div>
      </div>
    </section>
  );
};
