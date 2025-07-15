import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { componentTypeOptions } from '@/constants/admin/admin-component-selector';

import { ContactTeam, HelpSectionComponent } from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import { Plus } from 'lucide-react';

interface AddComponentFormProps {
  newComponentType: 'faq' | 'contact-team' | 'help-section';
  newComponentId: number | null;
  onTypeChange: (type: 'faq' | 'contact-team' | 'help-section') => void;
  onIdChange: (id: number | null) => void;
  onAddComponent: () => void;
  availableToAdd: (FAQComponent | ContactTeam | HelpSectionComponent)[];
}

export const AddComponentForm = ({
  newComponentType,
  newComponentId,
  onTypeChange,
  onIdChange,
  onAddComponent,
  availableToAdd,
}: AddComponentFormProps) => {
  const getDisplayName = (component: FAQComponent | ContactTeam | HelpSectionComponent) => {
    if (newComponentType === 'faq' || newComponentType === 'contact-team') {
      return (component as FAQComponent | ContactTeam).name;
    } else if (newComponentType === 'help-section') {
      return (component as HelpSectionComponent).title;
    }
    return `Komponent ${component.id}`;
  };

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <h4 className="font-medium">Dodaj komponent</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Typ komponentu</Label>
          <Select
            value={newComponentType}
            onValueChange={(value: any) => {
              onTypeChange(value);
              onIdChange(null);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {componentTypeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Komponent</Label>
          <Select
            value={newComponentId?.toString() || ''}
            onValueChange={value => onIdChange(parseInt(value))}
            disabled={availableToAdd.length === 0}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  availableToAdd.length === 0 ? 'Brak dostępnych komponentów' : 'Wybierz komponent'
                }
              />
            </SelectTrigger>
            <SelectContent>
              {availableToAdd.map(component => (
                <SelectItem key={component.id} value={component.id.toString()}>
                  {getDisplayName(component)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button
            onClick={onAddComponent}
            disabled={!newComponentId || availableToAdd.length === 0}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Dodaj
          </Button>
        </div>
      </div>
    </div>
  );
};
