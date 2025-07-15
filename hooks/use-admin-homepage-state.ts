import { HeroSettings, PopupSettings } from '@/types/admin/admin-homepage';
import { useState } from 'react';

const defaultHeroSettings: HeroSettings = {
  title: '',
  subtitle: '',
  searchPlaceholder: '',
  heroImage: undefined,
  sliderEnabled: true,
  showNavigation: true,
  showIndicators: true,
  autoPlayInterval: 5,
  slides: [],
};

const defaultPopupSettings: PopupSettings = {
  active: false,
  title: '',
  content: '',
  image: '',
  showFrom: undefined,
  showUntil: undefined,
  showOnce: false,
  popupImage: undefined,
};

export function useAdminHomepageState() {
  const [heroSettings, setHeroSettings] = useState<HeroSettings>(defaultHeroSettings);
  const [popupSettings, setPopupSettings] = useState<PopupSettings>(defaultPopupSettings);

  const updateHeroSettings = (updates: Partial<HeroSettings>) => {
    setHeroSettings(prev => ({ ...prev, ...updates }));
  };

  const updatePopupSettings = (updates: Partial<PopupSettings>) => {
    setPopupSettings(prev => ({ ...prev, ...updates }));
  };

  const handleSaveHeroContent = () => {
    // TODO: Implement save logic
    console.log('Saving hero content:', heroSettings);
  };

  const handleSavePopupSettings = () => {
    // TODO: Implement save logic
    console.log('Saving popup settings:', popupSettings);
  };

  const handleHeroImageUpload = (event: React.ChangeEvent<HTMLInputElement | null>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        updateHeroSettings({ heroImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePopupImageUpload = (event: React.ChangeEvent<HTMLInputElement | null>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        updatePopupSettings({
          popupImage: e.target?.result as string,
          image: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeHeroImage = () => {
    updateHeroSettings({ heroImage: undefined });
  };

  const removePopupImage = () => {
    updatePopupSettings({ popupImage: undefined, image: '' });
  };

  return {
    heroSettings,
    popupSettings,
    updateHeroSettings,
    updatePopupSettings,
    handleSaveHeroContent,
    handleSavePopupSettings,
    handleHeroImageUpload,
    handlePopupImageUpload,
    removeHeroImage,
    removePopupImage,
    setPopupSettings,
  };
}
