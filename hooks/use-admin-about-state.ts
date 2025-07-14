import { initialAboutPageContent } from '@/constants/admin/admin-about';
import { AboutContent } from '@/types/admin/admin-about';
import { useState } from 'react';

export function useAdminAboutState() {
  const [aboutContent, setAboutContent] = useState<AboutContent>(initialAboutPageContent);
  const [isEditing, setIsEditing] = useState(false);
  const [originalContent, setOriginalContent] = useState<AboutContent>(initialAboutPageContent);

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving about content:', aboutContent);
    setAboutContent(prev => ({ ...prev, updatedAt: new Date().toISOString() }));
    setOriginalContent(aboutContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setAboutContent(originalContent);
    setIsEditing(false);
  };

  const startEditing = () => {
    setOriginalContent(aboutContent);
    setIsEditing(true);
  };

  return {
    aboutContent,
    isEditing,
    originalContent,
    setAboutContent,
    setIsEditing,
    handleSave,
    handleCancel,
    startEditing,
  };
}
