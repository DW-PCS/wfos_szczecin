'use client';

import { useAdminAboutState } from '@/hooks/use-admin-about-state';
import { AdminAboutHeader } from './admin-about-header';
import { AdminAboutTabs } from './admin-about-tabs';

export function AdminAboutPage() {
  const { aboutContent, isEditing, setAboutContent, setIsEditing, handleSave, handleCancel } =
    useAdminAboutState();

  return (
    <div className="space-y-6">
      <AdminAboutHeader
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
      />

      <AdminAboutTabs
        aboutContent={aboutContent}
        setAboutContent={setAboutContent}
        isEditing={isEditing}
      />
    </div>
  );
}
