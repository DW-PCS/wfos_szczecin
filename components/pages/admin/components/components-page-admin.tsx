'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, HelpCircle, Settings, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ComponentsHeader } from './components-header';
import { FAQSectionHeader } from './faq/faq-section-header';

import { ContactTeamSectionHeader } from './team/contact-team-section-header';
import { FAQEmptyState } from './faq/faq-empty-state';

import { ContactTeam, HelpSectionComponent } from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import { ContactTeamCard } from './cards/contact-team-card';
import { FAQComponentCard } from './cards/faq-component-card';
import { ContactTeamEmptyState } from './team/contact-team-empty-state';
import { HelpSectionDisplay } from './help-section-display';
import { HelpSectionEditor } from './help-section-editor';

interface ComponentsViewProps {
  faqComponents: FAQComponent[];
  contactTeams: ContactTeam[];
  helpSection: HelpSectionComponent;
}

export default function ComponentsView({
  faqComponents,
  contactTeams,
  helpSection: initialHelpSection,
}: ComponentsViewProps) {
  const router = useRouter();

  const [helpSection, setHelpSection] = useState<HelpSectionComponent>(initialHelpSection);
  const [activeTab, setActiveTab] = useState('faq');
  const [isEditingHelpSection, setIsEditingHelpSection] = useState(false);

  const deleteFAQComponent = async (componentId: number) => {};
  const deleteContactTeam = async (teamId: number) => {};
  const toggleFAQComponentActive = async (componentId: number) => {};
  const toggleContactTeamActive = async (teamId: number) => {};
  const updateHelpSection = async (
    updatedSection: HelpSectionComponent
  ): Promise<HelpSectionComponent> => {
    return updatedSection;
  };

  const handleDeleteComponent = async (componentId: number) => {
    console.log('Deleting FAQ component:', componentId);
    try {
      await deleteFAQComponent(componentId);
      console.log('FAQ component deleted successfully');
      router.refresh();
    } catch (error) {
      console.error('Error deleting FAQ component:', error);
    }
  };

  const handleToggleActive = async (componentId: number) => {
    console.log('Toggling FAQ component active status:', componentId);
    try {
      await toggleFAQComponentActive(componentId);
      console.log('FAQ component status toggled successfully');
      router.refresh();
    } catch (error) {
      console.error('Error toggling FAQ component status:', error);
    }
  };

  const handleDuplicateComponent = async (component: FAQComponent) => {
    console.log('Duplicating FAQ component:', component.id);

    const params = new URLSearchParams({
      duplicate: component.id.toString(),
      name: `${component.name} (kopia)`,
    });
    router.push(`/admin/komponenty/nowyFaq?${params.toString()}`);
  };

  const handleCreateFAQ = () => {
    console.log('Navigating to create new FAQ component');
    router.push('/admin/komponenty/nowy-faq');
  };

  const handleEditComponent = (component: FAQComponent) => {
    console.log('Navigating to edit FAQ component:', component.id);
    router.push(`/admin/komponenty/faq/${component.id}/edytuj`);
  };

  // Contact Team handlers
  const handleCreateContactTeam = () => {
    console.log('Navigating to create new contact team');
    router.push('/admin/komponenty/nowy-zespol');
  };

  const handleEditContactTeam = (team: ContactTeam) => {
    console.log('Navigating to edit contact team:', team.id);
    router.push(`/admin/komponenty/zespol/${team.id}/edytuj`);
  };

  const handleDeleteContactTeam = async (teamId: number) => {
    console.log('Deleting contact team:', teamId);
    try {
      await deleteContactTeam(teamId);
      console.log('Contact team deleted successfully');
      router.refresh();
    } catch (error) {
      console.error('Error deleting contact team:', error);
    }
  };

  const handleToggleContactTeamActive = async (teamId: number) => {
    console.log('Toggling contact team active status:', teamId);
    try {
      await toggleContactTeamActive(teamId);
      console.log('Contact team status toggled successfully');
      router.refresh();
    } catch (error) {
      console.error('Error toggling contact team status:', error);
    }
  };

  const handleDuplicateContactTeam = async (team: ContactTeam) => {
    console.log('Duplicating contact team:', team.id);
    // Navigate to create new contact team with duplicated data in URL params
    const params = new URLSearchParams({
      duplicate: team.id.toString(),
      name: `${team.name} (kopia)`,
    });
    router.push(`/admin/komponenty/nowy?${params.toString()}`);
  };

  // Help Section handlers
  const handleSaveHelpSection = async (updatedSection: HelpSectionComponent) => {
    console.log('Saving help section:', updatedSection);
    try {
      const savedSection = await updateHelpSection(updatedSection);
      setHelpSection(savedSection);
      setIsEditingHelpSection(false);
      console.log('Help section saved successfully');
    } catch (error) {
      console.error('Error saving help section:', error);
    }
  };

  return (
    <div className="space-y-6">
      <ComponentsHeader />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            FAQ Komponenty
          </TabsTrigger>
          <TabsTrigger value="other" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Inne komponenty
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Ustawienia
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          <FAQSectionHeader onCreateFAQ={handleCreateFAQ} />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqComponents.map(component => (
              <FAQComponentCard
                key={component.id}
                component={component}
                onEdit={handleEditComponent}
                onToggleActive={handleToggleActive}
                onDuplicate={handleDuplicateComponent}
                onDelete={handleDeleteComponent}
              />
            ))}
          </div>

          {faqComponents.length === 0 && <FAQEmptyState />}
        </TabsContent>

        <TabsContent value="other" className="space-y-6">
          <ContactTeamSectionHeader onCreateTeam={handleCreateContactTeam} />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactTeams.map(team => (
              <ContactTeamCard
                key={team.id}
                team={team}
                onEdit={handleEditContactTeam}
                onToggleActive={handleToggleContactTeamActive}
                onDuplicate={handleDuplicateContactTeam}
                onDelete={handleDeleteContactTeam}
              />
            ))}
          </div>

          {contactTeams.length === 0 && <ContactTeamEmptyState />}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ustawienia komponentów</CardTitle>
              <CardDescription>Globalne ustawienia dla wszystkich komponentów</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Automatyczne sortowanie FAQ</h4>
                    <p className="text-sm text-gray-600">Sortuj pytania według popularności</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Włączone
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Wyszukiwanie w FAQ</h4>
                    <p className="text-sm text-gray-600">Włącz funkcję wyszukiwania</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Włączone
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Sekcja pomocy "Nie znalazłeś odpowiedzi?"</CardTitle>
                  <CardDescription>
                    Zarządzaj sekcją pomocy wyświetlaną pod FAQ z informacjami kontaktowymi
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditingHelpSection(!isEditingHelpSection)}
                  className="flex items-center gap-2"
                >
                  {isEditingHelpSection ? (
                    <>
                      <X className="h-4 w-4" />
                      Anuluj
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4" />
                      Edytuj
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {!isEditingHelpSection ? (
                <HelpSectionDisplay helpSection={helpSection} />
              ) : (
                <HelpSectionEditor
                  helpSection={helpSection}
                  onSave={handleSaveHelpSection}
                  onCancel={() => setIsEditingHelpSection(false)}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
