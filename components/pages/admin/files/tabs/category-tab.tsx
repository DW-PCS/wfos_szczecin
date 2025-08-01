import { FileCategory } from '@/types/file';
import { CategoryItem } from '../category-item';

interface CategoriesTabProps {
  categories: FileCategory[];
  getFilesByCategory: (categoryId: string) => FileCategory[];
  onEditCategory: (category: FileCategory) => void;
  onDeleteCategory: (categoryId: string) => void;
}

export function CategoriesTab({
  categories,
  getFilesByCategory,
  onEditCategory,
  onDeleteCategory,
}: CategoriesTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(category => {
        const filesCount = getFilesByCategory(category.id).length;

        return (
          <CategoryItem
            key={category.id}
            category={category}
            filesCount={filesCount}
            onEdit={onEditCategory}
            onDelete={onDeleteCategory}
          />
        );
      })}
    </div>
  );
}
