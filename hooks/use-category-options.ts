import { FileCategory } from '@/types/file';
import { useState } from 'react';

interface CategoryForm {
  title: string;
  icon: string;
  description: string;
  order: number;
}

export function useCategoryOperations(categories: FileCategory[]) {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<FileCategory | null>(null);
  const [categoryForm, setCategoryForm] = useState<CategoryForm>({
    title: '',
    icon: 'FileText',
    description: '',
    order: categories.length + 1,
  });

  const resetCategoryForm = () => {
    setCategoryForm({
      title: '',
      icon: 'FileText',
      description: '',
      order: categories.length + 1,
    });
  };

  const handleCategorySubmit = async () => {
    console.log('Submitting category:', categoryForm);

    try {
      if (editingCategory) {
        console.log('Updating category:', editingCategory.id, categoryForm);
        // await updateCategory(editingCategory.id, categoryForm);
        setEditingCategory(null);
      } else {
        console.log('Creating new category:', categoryForm);
        // await addCategory(categoryForm);
      }
      resetCategoryForm();
      setIsAddCategoryOpen(false);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleEditCategory = (category: FileCategory) => {
    console.log('Editing category:', category);
    setEditingCategory(category);
    setCategoryForm({
      title: category.title,
      icon: category.icon,
      description: category.description || '',
      order: category.order,
    });
    setIsAddCategoryOpen(true);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    console.log('Deleting category:', categoryId);
    try {
      // await deleteCategory(categoryId);
      console.log('Category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAddCategory = () => {
    setEditingCategory(null);
    resetCategoryForm();
    setIsAddCategoryOpen(true);
  };

  const handleCategoryFormChange = (data: Partial<CategoryForm>) => {
    setCategoryForm(prev => ({ ...prev, ...data }));
  };

  return {
    isAddCategoryOpen,
    setIsAddCategoryOpen,
    editingCategory,
    setEditingCategory,
    categoryForm,
    setCategoryForm,
    handleCategorySubmit,
    handleEditCategory,
    handleDeleteCategory,
    handleAddCategory,
    handleCategoryFormChange,
  };
}
