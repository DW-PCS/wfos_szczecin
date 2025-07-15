import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DEFAULT_TAB, VALID_TABS } from '@/constants/admin/admin-home';
import { useAdminHomepageState } from '@/hooks/use-admin-homepage-state';
import { useTabSelection } from '@/hooks/use-tab-selection';
import { useRef } from 'react';
import { AdminHeroContentTab } from './tabs/admin-hero-content-tab';
import { AdminPopupTab } from './tabs/admin-popup-tab';
import { AdminSliderSettingsTab } from './tabs/admin-slider-settings-tab';
import { AdminSliderTab } from './tabs/admin-slider-tab';
import { AdminStatsSectionTab } from './tabs/admin-stats-section-tab';

const AdminHomeTabs = () => {
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

  const { activeTab, handleTabChange } = useTabSelection(VALID_TABS, DEFAULT_TAB);
  return (
    <Tabs
      onValueChange={handleTabChange}
      value={activeTab}
      defaultValue="content"
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger className="cursor-pointer" value="content">
          Treść główna
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="slider">
          Slider banerów
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="slider-settings">
          Ustawienia slidera
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="stats-section">
          Sekcja statystyk
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

      <AdminSliderTab
        heroSettings={heroSettings}
        updateHeroSettings={updateHeroSettings}
        handleSaveHeroContent={handleSaveHeroContent}
      />

      <AdminSliderSettingsTab
        heroSettings={heroSettings}
        updateHeroSettings={updateHeroSettings}
        handleSaveHeroContent={handleSaveHeroContent}
      />

      <AdminStatsSectionTab handleSaveContent={handleSaveHeroContent} />

      <AdminPopupTab
        popupSettings={popupSettings}
        setPopupSettings={setPopupSettings}
        handleSavePopupSettings={handleSavePopupSettings}
        handlePopupImageUpload={handlePopupImageUpload}
        popupImageRef={popupImageRef}
        removePopupImage={handleRemovePopupImage}
      />
    </Tabs>
  );
};

export default AdminHomeTabs;
