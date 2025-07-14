'use client';

import { DEFAULT_TAB, VALID_TABS } from '@/constants/admin/admin-about';
import { useAdminAboutState } from '@/hooks/use-admin-about-state';
import { useTabSelection } from '@/hooks/use-tab-selection';
import { AdminAboutHeader } from './admin-about-header';
import { AdminAboutTabs } from './admin-about-tabs';

export function AdminAboutPage() {
  const { activeTab, handleTabChange } = useTabSelection(VALID_TABS, DEFAULT_TAB);

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
        activeTab={activeTab}
        onTabChange={handleTabChange}
        aboutContent={aboutContent}
        setAboutContent={setAboutContent}
        isEditing={isEditing}
      />
    </div>
  );
}
