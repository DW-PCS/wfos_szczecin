'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface CategoryFormData {
  title: string;
  icon: string;
  description: string;
  order: number;
}

interface AddCategoryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  categoryForm: CategoryFormData;
  onCategoryFormChange: (data: Partial<CategoryFormData>) => void;
  onSubmit: () => void;
  editingCategory?: boolean;
}

export function AddCategoryDialog({
  isOpen,
  onOpenChange,
  categoryForm,
  onCategoryFormChange,
  onSubmit,
  editingCategory,
}: AddCategoryDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {editingCategory ? 'Edytuj kategorię' : 'Dodaj nową kategorię'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {editingCategory
              ? 'Zaktualizuj informacje o kategorii'
              : 'Utwórz nową kategorię plików'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="category-title">Nazwa kategorii</Label>
            <Input
              id="category-title"
              value={categoryForm.title}
              onChange={e => onCategoryFormChange({ title: e.target.value })}
              placeholder="np. Wnioski"
            />
          </div>
          <div>
            <Label htmlFor="category-icon">Ikona</Label>
            <Select
              value={categoryForm.icon}
              onValueChange={value => onCategoryFormChange({ icon: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FileText">📄 FileText</SelectItem>
                <SelectItem value="ImageIcon">🖼️ ImageIcon</SelectItem>
                <SelectItem value="File">📁 File</SelectItem>
                <SelectItem value="FolderPlus">📂 FolderPlus</SelectItem>
                <SelectItem value="Settings">⚙️ Settings</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="category-description">Opis (opcjonalny)</Label>
            <Textarea
              id="category-description"
              value={categoryForm.description}
              onChange={e => onCategoryFormChange({ description: e.target.value })}
              placeholder="Krótki opis kategorii"
            />
          </div>
          <div>
            <Label htmlFor="category-order">Kolejność</Label>
            <Input
              id="category-order"
              type="number"
              value={categoryForm.order}
              onChange={e => onCategoryFormChange({ order: parseInt(e.target.value) || 1 })}
              min="1"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Anuluj
          </Button>
          <Button onClick={onSubmit}>{editingCategory ? 'Zaktualizuj' : 'Dodaj kategorię'}</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
