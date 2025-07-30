'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface CategoryDeleteDialogProps {
  categoryTitle: string;
  filesCount: number;
  onConfirm: () => void;
}

export function CategoryDeleteDialog({
  categoryTitle,
  filesCount,
  onConfirm,
}: CategoryDeleteDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Trash2 className="h-4 w-4 mr-1" />
          Usuń
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Usuń kategorię</AlertDialogTitle>
          <AlertDialogDescription>
            Czy na pewno chcesz usunąć kategorię "{categoryTitle}"? Wszystkie pliki w tej kategorii
            ({filesCount}) również zostaną usunięte. Ta akcja jest nieodwracalna.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Usuń kategorię</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
