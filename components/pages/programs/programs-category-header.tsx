import { programCategories } from "@/constants";


interface ProgramsCategoryHeaderProps {
  activeCategory: string;
  resultCount: number;
}

export function ProgramsCategoryHeader({
  activeCategory,
  resultCount,
}: ProgramsCategoryHeaderProps) {
  const category = programCategories.find(c => c.id === activeCategory);

  if (!category) return null;

  const IconComponent = category.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary-green" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary-navy">{category.title}</h2>
          <p className="text-gray-600">
            {resultCount} {resultCount === 1 ? 'dostępny program' : 'dostępnych programów'}
          </p>
        </div>
      </div>
    </div>
  );
}
