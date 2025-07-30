import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

async function togglePagePublished(pageId: string): Promise<void> {
  const response = await fetch(`/api/pages/${pageId}/toggle-published`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to toggle page published status');
  }
}

async function deletePage(pageId: string): Promise<void> {
  const response = await fetch(`/api/pages/${pageId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete page');
  }
}

export function usePagesActions() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleEditPage = (pageId: string) => {
    router.push(`/admin/programy/strony/${pageId}/edytuj`);
  };

  const handleAddNew = () => {
    router.push('/admin/programy/strony/nowa');
  };

  const handleTogglePublished = (pageId: string) => {
    startTransition(async () => {
      try {
        await togglePagePublished(pageId);
        console.log(`Toggled published status for page: ${pageId}`);
        // TODO: Add success notification
        // TODO: Refresh page data or use optimistic updates
      } catch (error) {
        console.error('Failed to toggle page published status:', error);
        // TODO: Add error notification
      }
    });
  };

  const handleDeletePage = (pageId: string) => {
    startTransition(async () => {
      try {
        await deletePage(pageId);
        console.log(`Deleted page: ${pageId}`);
        // TODO: Add success notification
        // TODO: Refresh page data or remove from local state
      } catch (error) {
        console.error('Failed to delete page:', error);
        // TODO: Add error notification
      }
    });
  };

  return {
    isPending,
    handleEditPage,
    handleAddNew,
    handleTogglePublished,
    handleDeletePage,
  };
}
