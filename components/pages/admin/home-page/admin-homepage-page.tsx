'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdminHomepageState } from '@/hooks/use-admin-homepage-state';
import { useRef } from 'react';
import { AdminHeroContentTab } from './admin-hero-content-tab';
import { AdminHomepageHeader } from './admin-homepage-header';
import { AdminPopupTab } from './admin-popup-tab';

export function AdminHomepagePage() {
  const heroImageRef = useRef<HTMLInputElement | null>(null);
  const popupImageRef = useRef<HTMLInputElement | null>(null);

  const {
    heroSettings,
    popupSettings,
    updateHeroSettings,
    setPopupSettings,
    handleSaveHeroContent,
    handleSavePopupSettings,
    handleHeroImageUpload,
    handlePopupImageUpload,
    removeHeroImage,
    removePopupImage,
  } = useAdminHomepageState();

  const handleRemovePopupImage = () => {
    if (popupImageRef.current) {
      popupImageRef.current.value = '';
    }
    removePopupImage();
  };

  const handleRemoveHeroImage = () => {
    if (heroImageRef.current) {
      heroImageRef.current.value = '';
    }
    removeHeroImage();
  };

  return (
    <div className="space-y-6">
      <AdminHomepageHeader />

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger className="cursor-pointer" value="content">
            Treść główna
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="popup">
            Popup
          </TabsTrigger>
        </TabsList>

        <AdminHeroContentTab
          heroSettings={heroSettings}
          updateHeroSettings={updateHeroSettings}
          handleSaveHeroContent={handleSaveHeroContent}
          handleHeroImageUpload={handleHeroImageUpload}
          removeHeroImage={handleRemoveHeroImage}
          heroImageRef={heroImageRef}
        />

        <AdminPopupTab
          popupSettings={popupSettings}
          setPopupSettings={setPopupSettings}
          handleSavePopupSettings={handleSavePopupSettings}
          handlePopupImageUpload={handlePopupImageUpload}
          popupImageRef={popupImageRef}
          removePopupImage={handleRemovePopupImage}
        />
      </Tabs>
    </div>
  );
}
