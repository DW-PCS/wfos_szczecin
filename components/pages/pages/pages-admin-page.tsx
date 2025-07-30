'use client';

import { usePagesActions } from '@/hooks/use-pages-actions';
import { Page } from '@/types/page';
import { PagesHeader } from './pages-header';
import { PagesList } from './pages-list';

interface PagesViewProps {
  pages: Page[];
}

export default function PagesView({ pages }: PagesViewProps) {
  const { isPending, handleAddNew, handleEditPage, handleTogglePublished, handleDeletePage } =
    usePagesActions();

  return (
    <div className="space-y-6">
      <PagesHeader onAddNew={handleAddNew} isPending={isPending} />

      <PagesList
        pages={pages}
        isPending={isPending}
        onEdit={handleEditPage}
        onTogglePublished={handleTogglePublished}
        onDelete={handleDeletePage}
      />
    </div>
  );
}
