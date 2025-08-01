'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Copy, Edit, Eye, EyeOff } from 'lucide-react';

import { FAQComponent } from '@/types/faq';
import { FAQDeleteDialog } from '../dialogs/faq-delete-dialog';

const placementLabels = {
  homepage: 'Strona główna',
  contact: 'Kontakt',
  programs: 'Programy',
  about: 'O nas',
  custom: 'Niestandardowe',
};

interface FAQComponentCardProps {
  component: FAQComponent;
  onEdit: (component: FAQComponent) => void;
  onToggleActive: (componentId: number) => void;
  onDuplicate: (component: FAQComponent) => void;
  onDelete: (componentId: number) => void;
}

export function FAQComponentCard({
  component,
  onEdit,
  onToggleActive,
  onDuplicate,
  onDelete,
}: FAQComponentCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant={component.isActive ? 'default' : 'secondary'}
            className={component.isActive ? 'bg-green-100 text-green-800' : ''}
          >
            {component.isActive ? 'Aktywny' : 'Nieaktywny'}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {placementLabels[component.placement]}
          </Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2">{component.name}</CardTitle>
        <CardDescription className="text-sm">{component.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Pytania:</span>
            <span className="font-medium">{component.faqItems.length}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Popularne:</span>
            <span className="font-medium">
              {component.faqItems.filter(item => item.popular).length}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Ostatnia aktualizacja:</span>
            <span className="font-medium text-xs">
              {format(new Date(component.updatedAt), 'dd.MM.yyyy')}
            </span>
          </div>
        </div>
      </CardContent>
      <div className="p-4 border-t flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onEdit(component)}>
          <Edit className="h-4 w-4 mr-2" /> Edytuj
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onToggleActive(component.id)}
          className={
            component.isActive
              ? 'text-orange-600 hover:text-orange-700'
              : 'text-green-600 hover:text-green-700'
          }
        >
          {component.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDuplicate(component)}
          className="text-blue-600 hover:text-blue-700"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <FAQDeleteDialog componentName={component.name} onConfirm={() => onDelete(component.id)} />
      </div>
    </Card>
  );
}
