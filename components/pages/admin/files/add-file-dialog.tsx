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
import { FileCategory } from '@/types/file';

interface FileFormData {
  name: string;
  description: string;
  type: string;
  categoryId: string;
  file: File | null;
}

interface AddFileDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  fileForm: FileFormData;
  onFileFormChange: (data: Partial<FileFormData>) => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  categories: FileCategory[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  formatFileSize: (bytes: number) => string;
  isUploading: boolean;
  editingFile?: boolean;
}

export function AddFileDialog({
  isOpen,
  onOpenChange,
  fileForm,
  onFileFormChange,
  onFileUpload,
  onSubmit,
  categories,
  fileInputRef,
  formatFileSize,
  isUploading,
  editingFile,
}: AddFileDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{editingFile ? 'Edytuj plik' : 'Dodaj nowy plik'}</AlertDialogTitle>
          <AlertDialogDescription>
            {editingFile ? 'Zaktualizuj informacje o pliku' : 'Prześlij nowy plik do pobrania'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="file-upload">Plik</Label>
            <Input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              onChange={onFileUpload}
              className="cursor-pointer"
            />
            {fileForm.file && (
              <p className="text-sm text-gray-600 mt-1">
                Wybrany plik: {fileForm.file.name} ({formatFileSize(fileForm.file.size)})
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="file-name">Nazwa pliku</Label>
            <Input
              id="file-name"
              value={fileForm.name}
              onChange={e => onFileFormChange({ name: e.target.value })}
              placeholder="np. Wniosek o dofinansowanie"
            />
          </div>
          <div>
            <Label htmlFor="file-description">Opis</Label>
            <Textarea
              id="file-description"
              value={fileForm.description}
              onChange={e => onFileFormChange({ description: e.target.value })}
              placeholder="Krótki opis pliku"
            />
          </div>
          <div>
            <Label htmlFor="file-type">Typ pliku</Label>
            <Input
              id="file-type"
              value={fileForm.type}
              onChange={e => onFileFormChange({ type: e.target.value.toUpperCase() })}
              placeholder="PDF, DOC, PNG..."
            />
            {fileForm.file && (
              <p className="text-xs text-gray-500 mt-1">
                Automatycznie wykryty rozmiar: {formatFileSize(fileForm.file.size)}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="file-category">Kategoria</Label>
            <Select
              value={fileForm.categoryId}
              onValueChange={value => onFileFormChange({ categoryId: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wybierz kategorię" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <AlertDialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Anuluj
          </Button>
          <Button
            onClick={onSubmit}
            disabled={!fileForm.name || !fileForm.categoryId || isUploading}
          >
            {isUploading ? 'Przesyłanie...' : editingFile ? 'Zaktualizuj' : 'Dodaj plik'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
