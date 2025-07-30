'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Page } from '@/types/page';
import { PageItem } from './page-item';
import { PagesEmptyState } from './pages-empty-state';

interface PagesListProps {
  pages: Page[];
  isPending?: boolean;
  onEdit: (pageId: string) => void;
  onTogglePublished: (pageId: string, published: boolean) => void;
  onDelete: (pageId: string) => void;
}

export function PagesList({
  pages,
  isPending,
  onEdit,
  onTogglePublished,
  onDelete,
}: PagesListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista stron ({pages.length})</CardTitle>
        <CardDescription>Wszystkie strony w systemie CMS</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pages.length === 0 ? (
            <PagesEmptyState />
          ) : (
            pages.map(page => (
              <PageItem
                key={page.id}
                page={page}
                isPending={isPending}
                onEdit={onEdit}
                onTogglePublished={onTogglePublished}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
