import { ContactPageContent, ContactPageOffice } from '@/types/admin/admin-contact';
import { FormTab } from './tabs/form-tab';
import { HeadquartersTab } from './tabs/headquarters-tab';
import { HeroTab } from './tabs/hero-tab';
import { MapTab } from './tabs/map-tab';
import { OfficesTab } from './tabs/offices-tab';

interface ContactPageTabsProps {
  activeTab: string;
  contactContent: ContactPageContent;
  setContactContent: (content: ContactPageContent) => void;
  isEditing: boolean;
  addOffice: () => void;
  removeOffice: (id: number) => void;
  updateOffice: (id: number, updates: Partial<ContactPageOffice>) => void;
}

export function ContactPageTabs({
  contactContent,
  setContactContent,
  isEditing,
  addOffice,
  removeOffice,
  updateOffice,
}: ContactPageTabsProps) {
  return (
    <>
      <HeroTab
        contactContent={contactContent}
        setContactContent={setContactContent}
        isEditing={isEditing}
      />

      <FormTab
        contactContent={contactContent}
        setContactContent={setContactContent}
        isEditing={isEditing}
      />

      <MapTab
        contactContent={contactContent}
        setContactContent={setContactContent}
        isEditing={isEditing}
      />

      <HeadquartersTab
        contactContent={contactContent}
        setContactContent={setContactContent}
        isEditing={isEditing}
        updateOffice={updateOffice}
      />

      <OfficesTab
        contactContent={contactContent}
        setContactContent={setContactContent}
        isEditing={isEditing}
        addOffice={addOffice}
        removeOffice={removeOffice}
        updateOffice={updateOffice}
      />
    </>
  );
}
