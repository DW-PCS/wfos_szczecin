'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DEFAULT_TAB,
  INITIAL_CONTACT_PAGE_CONTENT,
  VALID_TABS,
} from '@/constants/admin/admin-contact';
import { useContactPageState } from '@/hooks/use-contact-page-state';

import { useTabSelection } from '@/hooks/use-tab-selection';
import { Building, Edit, Map, MessageSquare, Users } from 'lucide-react';
import { ContactPageHeader } from './contact-page-header';
import { ContactPageInfo } from './contact-page-info';
import { ContactPageTabs } from './contact-page-tabs';


export default function ContactPageAdmin() {
  const { activeTab, handleTabChange } = useTabSelection(VALID_TABS, DEFAULT_TAB);

  const {
    contactContent,
    isEditing,
    setContactContent,
    setIsEditing,
    handleSave,
    handleCancel,
    addOffice,
    removeOffice,
    updateOffice,
  } = useContactPageState(INITIAL_CONTACT_PAGE_CONTENT);

  return (
    <div className="space-y-6">
      <ContactPageHeader
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
      />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="hero" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Hero
          </TabsTrigger>
          <TabsTrigger value="form" className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Formularz
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            Mapa
          </TabsTrigger>
          <TabsTrigger value="headquarters" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Siedziba
          </TabsTrigger>
          <TabsTrigger value="offices" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Biura
          </TabsTrigger>
        </TabsList>

        <ContactPageTabs
          activeTab={activeTab}
          contactContent={contactContent}
          setContactContent={setContactContent}
          isEditing={isEditing}
          addOffice={addOffice}
          removeOffice={removeOffice}
          updateOffice={updateOffice}
        />
      </Tabs>

      <ContactPageInfo contactContent={contactContent} />
    </div>
  );
}
