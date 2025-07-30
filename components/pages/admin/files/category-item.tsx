'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCategory } from '@/types/file';

import { Edit, File, FileText, FolderPlus, ImageIcon, Settings } from 'lucide-react';
import { CategoryDeleteDialog } from './category-delete-dialog';


const iconMap = {
  FileText,
  ImageIcon,
  File,
  FolderPlus,
  Settings,
};

interface CategoryItemProps {
  category: FileCategory;
  filesCount: number;
  onEdit: (category: FileCategory) => void;
  onDelete: (categoryId: string) => void;
}

export function CategoryItem({ category, filesCount, onEdit, onDelete }: CategoryItemProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || File;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center">
              <IconComponent className="h-5 w-5 text-primary-green" />
            </div>
            <div>
              <CardTitle className="text-lg">{category.title}</CardTitle>
              <CardDescription>{filesCount} plików</CardDescription>
            </div>
          </div>
          <Badge variant="outline">#{category.order}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(category)}>
            <Edit className="h-4 w-4 mr-1" />
            Edytuj
          </Button>
          <CategoryDeleteDialog
            categoryTitle={category.title}
            filesCount={filesCount}
            onConfirm={() => onDelete(category.id)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
