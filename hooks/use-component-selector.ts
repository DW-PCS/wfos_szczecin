import {
  ContactTeam,
  HelpSectionComponent,
  SelectedPageComponent,
} from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import { useState } from 'react';

interface UseComponentSelectorProps {
  selectedComponents: SelectedPageComponent[];
  onComponentsChange: (components: SelectedPageComponent[]) => void;
  availableFAQComponents: FAQComponent[];
  availableContactTeams: ContactTeam[];
  availableHelpSections: HelpSectionComponent[];
}

export const useComponentSelector = ({
  selectedComponents,
  onComponentsChange,
  availableFAQComponents,
  availableContactTeams,
  availableHelpSections,
}: UseComponentSelectorProps) => {
  const [newComponentType, setNewComponentType] = useState<'faq' | 'contact-team' | 'help-section'>(
    'faq'
  );
  const [newComponentId, setNewComponentId] = useState<number | null>(null);

  const getAvailableComponents = (type: 'faq' | 'contact-team' | 'help-section') => {
    switch (type) {
      case 'faq':
        return availableFAQComponents;
      case 'contact-team':
        return availableContactTeams;
      case 'help-section':
        return availableHelpSections;
      default:
        return [];
    }
  };

  const getComponentName = (component: SelectedPageComponent) => {
    const availableComponents = getAvailableComponents(component.type);
    const foundComponent = availableComponents.find(c => c.id === component.componentId);

    if (!foundComponent) return `Komponent ${component.componentId}`;

    if (component.type === 'faq' || component.type === 'contact-team') {
      return (foundComponent as FAQComponent | ContactTeam).name;
    } else if (component.type === 'help-section') {
      return (foundComponent as HelpSectionComponent).title;
    }

    return `Komponent ${component.componentId}`;
  };

  const handleAddComponent = () => {
    if (!newComponentId) return;

    const newComponent: SelectedPageComponent = {
      id: `${newComponentType}-${newComponentId}-${Date.now()}`,
      type: newComponentType,
      componentId: newComponentId,
      order: selectedComponents.length + 1,
      active: true,
    };

    onComponentsChange([...selectedComponents, newComponent]);
    setNewComponentId(null);
  };

  const handleRemoveComponent = (componentId: string) => {
    onComponentsChange(selectedComponents.filter(c => c.id !== componentId));
  };

  const handleToggleActive = (componentId: string) => {
    onComponentsChange(
      selectedComponents.map(c => (c.id === componentId ? { ...c, active: !c.active } : c))
    );
  };

  const moveComponent = (componentId: string, direction: 'up' | 'down') => {
    const currentIndex = selectedComponents.findIndex(c => c.id === componentId);
    if (currentIndex === -1) return;

    const newComponents = [...selectedComponents];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= newComponents.length) return;

    [newComponents[currentIndex], newComponents[targetIndex]] = [
      newComponents[targetIndex],
      newComponents[currentIndex],
    ];

    newComponents.forEach((component, index) => {
      component.order = index + 1;
    });

    onComponentsChange(newComponents);
  };

  const getAvailableToAdd = () => {
    const availableComponentsForType = getAvailableComponents(newComponentType);
    const alreadySelectedIds = selectedComponents
      .filter(c => c.type === newComponentType)
      .map(c => c.componentId);

    return availableComponentsForType.filter(c => !alreadySelectedIds.includes(c.id));
  };

  return {
    newComponentType,
    setNewComponentType,
    newComponentId,
    setNewComponentId,
    getAvailableComponents,
    getComponentName,
    handleAddComponent,
    handleRemoveComponent,
    handleToggleActive,
    moveComponent,
    getAvailableToAdd,
  };
};
