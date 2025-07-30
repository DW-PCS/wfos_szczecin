'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Page } from '@/types/page';
import { format } from 'date-fns';
import { Edit } from 'lucide-react';
import { PageDeleteDialog } from './page-delete-dialog';

interface PageItemProps {
  page: Page;
  isPending?: boolean;
  onEdit: (pageId: string) => void;
  onTogglePublished: (pageId: string, published: boolean) => void;
  onDelete: (pageId: string) => void;
}

export function PageItem({ page, isPending, onEdit, onTogglePublished, onDelete }: PageItemProps) {
  const handlePublishToggle = (checked: boolean) => {
    onTogglePublished(page.id.toString(), checked);
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-4">
        <Checkbox
          checked={page.published}
          onCheckedChange={handlePublishToggle}
          disabled={isPending}
          id={`publish-${page.id}`}
        />
        <div className="space-y-1">
          <Label htmlFor={`publish-${page.id}`} className="flex items-center gap-2 cursor-pointer">
            <h4 className="font-medium">{page.title}</h4>
            <Badge variant={page.published ? 'default' : 'secondary'}>
              {page.published ? 'Opublikowana' : 'Szkic'}
            </Badge>
          </Label>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>Autor: {page.author}</span>
            <span>Data dodania: {format(new Date(page.dateAdded), 'dd.MM.yyyy')}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(page.id.toString())}
          disabled={isPending}
        >
          <Edit className="h-4 w-4" />
        </Button>
        <PageDeleteDialog
          pageTitle={page.title}
          isPending={isPending}
          onConfirm={() => onDelete(page.id.toString())}
        />
      </div>
    </div>
  );
}
