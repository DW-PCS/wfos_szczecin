import { TabsContent } from '@/components/ui/tabs';
import { PopupSettingsCard } from './popup-settings-card';
import { PopupPreviewCard } from './popup-preview-card';
import { PopupSettings } from '@/types/admin-homepage';

interface AdminPopupTabProps {
  popupSettings: PopupSettings;
  setPopupSettings: (settings: PopupSettings) => void;
  handleSavePopupSettings: () => void;
  handlePopupImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  popupImageRef: React.RefObject<HTMLInputElement | null>;
}

export function AdminPopupTab({
  popupSettings,
  setPopupSettings,
  handleSavePopupSettings,
  handlePopupImageUpload,
  popupImageRef,
}: AdminPopupTabProps) {
  return (
    <TabsContent value="popup" className="space-y-4 pt-4">
      <PopupSettingsCard
        popupSettings={popupSettings}
        setPopupSettings={setPopupSettings}
        handleSavePopupSettings={handleSavePopupSettings}
        handlePopupImageUpload={handlePopupImageUpload}
        popupImageRef={popupImageRef}
      />

      <PopupPreviewCard popupSettings={popupSettings} />
    </TabsContent>
  );
}
