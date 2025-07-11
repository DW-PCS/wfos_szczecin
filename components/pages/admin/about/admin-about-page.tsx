'use client';

import { useAdminAboutState } from '@/hooks/use-admin-about-state';
import { useState } from 'react';
import { AdminAboutHeader } from './admin-about-header';
import { AdminAboutTabs } from './admin-about-tabs';

export function AdminAboutPage() {
  const [activeTab, setActiveTab] = useState('hero');

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
        onTabChange={setActiveTab}
        aboutContent={aboutContent}
        setAboutContent={setAboutContent}
        isEditing={isEditing}
      />
    </div>
  );
}
