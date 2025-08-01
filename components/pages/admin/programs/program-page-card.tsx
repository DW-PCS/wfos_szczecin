'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/cn';
import { generateSlug } from '@/lib/utils/helpers';
import { Page } from '@/types/page';
import { Edit } from 'lucide-react';
import { ProgramPageDeleteDialog } from './program-page-delete-dialog';

interface ProgramPageCardProps {
  page: Page;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ProgramPageCard({ page, onEdit, onDelete }: ProgramPageCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold">{page.title}</h3>
              <Badge variant="outline" className="text-xs">
                Strona programu
              </Badge>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className={cn('text-blue-500 hover:text-blue-700 hover:bg-blue-50')}
                onClick={() => onEdit(Number(page.id))}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <ProgramPageDeleteDialog
                pageTitle={page.title}
                onConfirm={() => onDelete(Number(page.id))}
              />
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <span className="font-medium">URL:</span> /programy/szczegoly/
            {page.slug || generateSlug(page.title)}
          </div>

          <div className="text-xs text-gray-500">
            <span className="font-medium">ID:</span> {page.id}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
