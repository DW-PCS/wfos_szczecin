import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PopupSettings } from '@/types/admin-homepage';
import { PopupActiveToggle } from './popup-active-toggle';
import { PopupContentField } from './popup-content-field';
import { PopupDateRange } from './popup-date-range';
import { PopupImageUpload } from './popup-image-upload';
import { PopupShowOnceCheckbox } from './popup-show-once-checkbox';
import { PopupTitleField } from './popup-title-field';
import { SaveButton } from './save-button';

interface PopupSettingsCardProps {
  popupSettings: PopupSettings;
  setPopupSettings: (settings: PopupSettings) => void;
  handleSavePopupSettings: () => void;
  handlePopupImageUpload: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  popupImageRef: React.RefObject<HTMLInputElement | null>;
}

export function PopupSettingsCard({
  popupSettings,
  setPopupSettings,
  handleSavePopupSettings,
  handlePopupImageUpload,
  popupImageRef,
}: PopupSettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zarządzanie popupem</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <PopupActiveToggle
          active={popupSettings.active}
          onToggle={checked => setPopupSettings({ ...popupSettings, active: checked })}
        />

        <PopupTitleField
          value={popupSettings.title}
          onChange={value => setPopupSettings({ ...popupSettings, title: value })}
        />

        <PopupContentField
          value={popupSettings.content}
          onChange={value => setPopupSettings({ ...popupSettings, content: value })}
        />

        <PopupImageUpload
          image={popupSettings.image}
          onImageUpload={handlePopupImageUpload}
          onRemoveImage={() => setPopupSettings({ ...popupSettings, image: '' })}
          imageRef={popupImageRef}
        />

        <PopupDateRange
          showFrom={popupSettings.showFrom}
          showUntil={popupSettings.showUntil}
          onShowFromChange={date =>
            setPopupSettings({ ...popupSettings, showFrom: date || undefined })
          }
          onShowUntilChange={date =>
            setPopupSettings({ ...popupSettings, showUntil: date || undefined })
          }
        />

        <PopupShowOnceCheckbox
          checked={popupSettings.showOnce}
          onCheckedChange={checked =>
            setPopupSettings({ ...popupSettings, showOnce: checked as boolean })
          }
        />

        <div className="pt-4">
          <SaveButton onClick={handleSavePopupSettings} text="Zapisz ustawienia popupu" />
        </div>
      </CardContent>
    </Card>
  );
}
