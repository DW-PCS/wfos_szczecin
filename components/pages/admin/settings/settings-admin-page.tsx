'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuManagementTab from './tabs/menu-management-tab';
import SiteSettingsTab from './tabs/site-settings-tab';
import UsersManagementTab from './tabs/users-management-tab';

export default function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ustawienia</h1>
        <p className="text-gray-600">Konfiguracja systemu i zarządzanie</p>
      </div>

      <Tabs defaultValue="site" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="site">Ustawienia strony</TabsTrigger>
          <TabsTrigger value="users">Zarządzanie użytkownikami</TabsTrigger>
          <TabsTrigger value="menu">Zarządzanie menu</TabsTrigger>
        </TabsList>

        <TabsContent value="site" className="pt-4">
          <SiteSettingsTab />
        </TabsContent>
        <TabsContent value="users" className="pt-4">
          <UsersManagementTab />
        </TabsContent>
        <TabsContent value="menu" className="pt-4">
          <MenuManagementTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
