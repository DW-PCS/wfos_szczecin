import { SelectedPageComponent } from '@/types/component-selector';
import { ComponentItem } from './component-item';


interface ComponentListProps {
  selectedComponents: SelectedPageComponent[];
  getComponentName: (component: SelectedPageComponent) => string;
  onToggleActive: (componentId: string) => void;
  onRemove: (componentId: string) => void;
  onMove: (componentId: string, direction: 'up' | 'down') => void;
}

export const ComponentList = ({
  selectedComponents,
  getComponentName,
  onToggleActive,
  onRemove,
  onMove,
}: ComponentListProps) => {
  return (
    <div className="space-y-3">
      <h4 className="font-medium">Wybrane komponenty ({selectedComponents.length})</h4>
      {selectedComponents.map((component, index) => (
        <ComponentItem
          key={component.id}
          component={component}
          index={index}
          totalComponents={selectedComponents.length}
          componentName={getComponentName(component)}
          onToggleActive={onToggleActive}
          onRemove={onRemove}
          onMove={onMove}
        />
      ))}
    </div>
  );
};
