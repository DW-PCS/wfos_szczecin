import { TabsContent } from '@/components/ui/tabs';
import { PopupSettings } from '@/types/admin/admin-homepage';
import { PopupPreviewCard } from './popup-preview-card';
import { PopupSettingsCard } from './popup-settings-card';

interface AdminPopupTabProps {
  popupSettings: PopupSettings;
  setPopupSettings: (settings: PopupSettings) => void;
  handleSavePopupSettings: () => void;
  handlePopupImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  popupImageRef: React.RefObject<HTMLInputElement | null>;
  removePopupImage: () => void;
}

export function AdminPopupTab({
  popupSettings,
  setPopupSettings,
  handleSavePopupSettings,
  handlePopupImageUpload,
  popupImageRef,
  removePopupImage,
}: AdminPopupTabProps) {
  return (
    <TabsContent value="popup" className="space-y-4 pt-4">
      <PopupSettingsCard
        popupSettings={popupSettings}
        setPopupSettings={setPopupSettings}
        handleSavePopupSettings={handleSavePopupSettings}
        handlePopupImageUpload={handlePopupImageUpload}
        popupImageRef={popupImageRef}
        removePopupImage={removePopupImage}
      />

      <PopupPreviewCard popupSettings={popupSettings} />
    </TabsContent>
  );
}
