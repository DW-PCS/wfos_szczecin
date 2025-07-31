'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Save } from 'lucide-react';
import { SiteSettings } from '@/types/admin/admin-settings';


const initialSiteSettings: SiteSettings = {
  siteName: 'WFOŚiGW Szczecin',
  contactEmail: 'kontakt@wfos.szczecin.pl',
  contactPhone: '+48 91 xxx xx xx',
  address: 'ul. Przykładowa 1, 70-xxx Szczecin',
  maintenanceMode: false,
  allowRegistrations: true,
};

export default function SiteSettingsTab() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initialSiteSettings);

  const handleSave = () => {
    console.log('Saving site settings:', siteSettings);
    alert('Ustawienia strony zapisane!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ustawienia strony</CardTitle>
        <CardDescription>Konfiguracja podstawowych parametrów witryny</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="site-name">Nazwa strony</Label>
          <Input
            id="site-name"
            value={siteSettings.siteName}
            onChange={e => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email kontaktowy</Label>
          <Input
            id="contact-email"
            type="email"
            value={siteSettings.contactEmail}
            onChange={e => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Telefon kontaktowy</Label>
          <Input
            id="contact-phone"
            value={siteSettings.contactPhone}
            onChange={e => setSiteSettings({ ...siteSettings, contactPhone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Adres</Label>
          <Textarea
            id="address"
            value={siteSettings.address}
            onChange={e => setSiteSettings({ ...siteSettings, address: e.target.value })}
          />
        </div>
        <div className="space-y-4 pt-4 border-t">
          <h4 className="font-medium">Ustawienia zaawansowane</h4>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="maintenance-mode">Tryb konserwacji</Label>
              <p className="text-sm text-gray-500">Wyłącz dostęp do strony dla użytkowników</p>
            </div>
            <Switch
              id="maintenance-mode"
              checked={siteSettings.maintenanceMode}
              onCheckedChange={checked =>
                setSiteSettings({ ...siteSettings, maintenanceMode: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="allow-registrations">Rejestracje użytkowników</Label>
              <p className="text-sm text-gray-500">Pozwól na tworzenie nowych kont</p>
            </div>
            <Switch
              id="allow-registrations"
              checked={siteSettings.allowRegistrations}
              onCheckedChange={checked =>
                setSiteSettings({ ...siteSettings, allowRegistrations: checked })
              }
            />
          </div>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Zapisz ustawienia
        </Button>
      </CardContent>
    </Card>
  );
}
