import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  componentTypeIcons,
  componentTypeLabels,
} from '@/constants/admin/admin-component-selector';

import { SelectedPageComponent } from '@/types/component-selector';
import { GripVertical, Trash2 } from 'lucide-react';

interface ComponentItemProps {
  component: SelectedPageComponent;
  index: number;
  totalComponents: number;
  componentName: string;
  onToggleActive: (componentId: string) => void;
  onRemove: (componentId: string) => void;
  onMove: (componentId: string, direction: 'up' | 'down') => void;
}

export const ComponentItem = ({
  component,
  index,
  totalComponents,
  componentName,
  onToggleActive,
  onRemove,
  onMove,
}: ComponentItemProps) => {
  const IconComponent = componentTypeIcons[component.type];

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconComponent className="h-5 w-5 text-primary-green" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{componentName}</span>
              <Badge variant="outline" className="text-xs">
                {componentTypeLabels[component.type]}
              </Badge>
              {!component.active && (
                <Badge variant="secondary" className="text-xs">
                  Nieaktywny
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600">Kolejność: {component.order}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(component.id, 'up')}
              disabled={index === 0}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(component.id, 'down')}
              disabled={index === totalComponents - 1}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              checked={component.active}
              onCheckedChange={() => onToggleActive(component.id)}
            />
            <Label className="text-sm">Aktywny</Label>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onRemove(component.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
