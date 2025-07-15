import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ContactTeam,
  HelpSectionComponent,
  SelectedPageComponent,
} from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import ComponentSelector from '../../component-selector/component-selector';

interface ComponentsTabProps {
  selectedComponents: SelectedPageComponent[];
  onComponentsChange: (components: SelectedPageComponent[]) => void;
  availableFAQComponents?: FAQComponent[];
  availableContactTeams?: ContactTeam[];
  availableHelpSections?: HelpSectionComponent[];
}

export const ComponentsTab = ({
  selectedComponents,
  onComponentsChange,
  availableFAQComponents = [],
  availableContactTeams = [],
  availableHelpSections = [],
}: ComponentsTabProps) => {
  const hasComponents =
    availableFAQComponents.length > 0 ||
    availableContactTeams.length > 0 ||
    availableHelpSections.length > 0;

  if (!hasComponents) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Komponenty</CardTitle>
          <CardDescription>Zarządzaj komponentami wyświetlanymi pod treścią strony</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8 text-gray-500">
          <p>Brak dostępnych komponentów do wyboru</p>
          <p className="text-sm">
            Najpierw utwórz komponenty FAQ, zespoły kontaktowe lub sekcje pomocy w panelu
            administracyjnym
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <ComponentSelector
      selectedComponents={selectedComponents}
      onComponentsChange={onComponentsChange}
      availableFAQComponents={availableFAQComponents}
      availableContactTeams={availableContactTeams}
      availableHelpSections={availableHelpSections}
    />
  );
};
