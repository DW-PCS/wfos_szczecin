import { useState } from 'react';

import {
  ContactPageContent,
  ContactPageOffice,
  ContactPageState,
} from '@/types/admin/admin-contact';

const updateContentTimestamp = (content: ContactPageContent): ContactPageContent => {
  return {
    ...content,
    updatedAt: new Date().toISOString(),
  };
};

export function useContactPageState(initialContent: ContactPageContent): ContactPageState {
  const [contactContent, setContactContent] = useState<ContactPageContent>(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [originalContent, setOriginalContent] = useState<ContactPageContent>(initialContent);

  const handleSave = () => {
    const updatedContent = updateContentTimestamp(contactContent);
    console.log(updatedContent, 'updatedContent');
    setContactContent(updatedContent);
    setOriginalContent(updatedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContactContent(originalContent);
    setIsEditing(false);
  };

  const addOffice = () => {
    setContactContent({
      ...contactContent,
      offices: [...contactContent.offices],
    });
  };

  const removeOffice = (id: number) => {
    setContactContent({
      ...contactContent,
      offices: contactContent.offices.filter(office => office.id !== id),
    });
  };

  const updateOffice = (id: number, updates: Partial<ContactPageOffice>) => {
    setContactContent({
      ...contactContent,
      offices: contactContent.offices.map(office =>
        office.id === id ? { ...office, ...updates } : office
      ),
    });
  };

  return {
    contactContent,
    isEditing,
    setContactContent,
    setIsEditing,
    handleSave,
    handleCancel,
    addOffice,
    removeOffice,
    updateOffice,
  };
}
