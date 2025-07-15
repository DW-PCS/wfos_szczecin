'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useComponentSelector } from '@/hooks/use-component-selector';

import {
  ContactTeam,
  HelpSectionComponent,
  SelectedPageComponent,
} from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import { AddComponentForm } from './add-component-form';
import { ComponentList } from './component-list';
import { EmptyState } from './empty-state';

interface ComponentSelectorProps {
  selectedComponents: SelectedPageComponent[];
  onComponentsChange: (components: SelectedPageComponent[]) => void;
  availableFAQComponents: FAQComponent[];
  availableContactTeams: ContactTeam[];
  availableHelpSections: HelpSectionComponent[];
}

export default function ComponentSelector({
  selectedComponents,
  onComponentsChange,
  availableFAQComponents,
  availableContactTeams,
  availableHelpSections,
}: ComponentSelectorProps) {
  const {
    newComponentType,
    setNewComponentType,
    newComponentId,
    setNewComponentId,
    getComponentName,
    handleAddComponent,
    handleRemoveComponent,
    handleToggleActive,
    moveComponent,
    getAvailableToAdd,
  } = useComponentSelector({
    selectedComponents,
    onComponentsChange,
    availableFAQComponents,
    availableContactTeams,
    availableHelpSections,
  });

  const availableToAdd = getAvailableToAdd();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Komponenty pod treścią</CardTitle>
        <CardDescription>
          Wybierz komponenty, które będą wyświetlane pod treścią strony
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <AddComponentForm
          newComponentType={newComponentType}
          newComponentId={newComponentId}
          onTypeChange={setNewComponentType}
          onIdChange={setNewComponentId}
          onAddComponent={handleAddComponent}
          availableToAdd={availableToAdd}
        />

        {selectedComponents.length > 0 ? (
          <ComponentList
            selectedComponents={selectedComponents}
            getComponentName={getComponentName}
            onToggleActive={handleToggleActive}
            onRemove={handleRemoveComponent}
            onMove={moveComponent}
          />
        ) : (
          <EmptyState />
        )}
      </CardContent>
    </Card>
  );
}
