'use client';

import { Badge } from '@/components/ui/badge';
import { HelpSectionComponent } from '@/types/component-selector';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const placementLabels = {
  homepage: 'Strona główna',
  contact: 'Kontakt',
  programs: 'Programy',
  about: 'O nas',
  custom: 'Niestandardowe',
};

interface HelpSectionDisplayProps {
  helpSection: HelpSectionComponent;
}

export function HelpSectionDisplay({ helpSection }: HelpSectionDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{helpSection.title}</h4>
          <p className="text-sm text-gray-600">{helpSection.description}</p>
        </div>
        <Badge variant={helpSection.active ? 'default' : 'secondary'}>
          {helpSection.active ? 'Aktywna' : 'Nieaktywna'}
        </Badge>
      </div>

      <div className="space-y-2">
        <h5 className="font-medium text-sm">Miejsca wyświetlania:</h5>
        <div className="flex flex-wrap gap-2">
          {helpSection.placements.map(placement => (
            <Badge key={placement} variant="outline">
              {placementLabels[placement]}
            </Badge>
          ))}
          {helpSection.customPlacements.map((custom, index) => (
            <Badge key={`custom-${index}`} variant="outline">
              {custom}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h5 className="font-medium text-sm">Kontakty ({helpSection.contacts.length}):</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {helpSection.contacts.map(contact => (
            <div key={contact.id} className="border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                {contact.icon === 'Phone' && <Phone className="h-4 w-4 text-primary-green" />}
                {contact.icon === 'Mail' && <Mail className="h-4 w-4 text-primary-green" />}
                {contact.icon === 'MessageCircle' && (
                  <MessageCircle className="h-4 w-4 text-primary-green" />
                )}
                <span className="font-medium text-sm">{contact.title}</span>
                {!contact.active && (
                  <Badge variant="secondary" className="text-xs">
                    Nieaktywny
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 mb-1">{contact.description}</p>
              <p className="text-sm font-medium">{contact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
