'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ContactPerson } from '@/types/component-selector';
import { GripVertical, Mail, Phone, User } from 'lucide-react';
import { ContactPersonDeleteDialog } from './contact-person-delete-dialog';

interface ContactPersonCardProps {
  person: ContactPerson;
  index: number;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onEdit: (index: number) => void;
  onMove: (index: number, direction: 'up' | 'down') => void;
  onDelete: (index: number) => void;
}

export function ContactPersonCard({
  person,
  index,
  canMoveUp,
  canMoveDown,
  onEdit,
  onMove,
  onDelete,
}: ContactPersonCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {person.firstName} {person.lastName}
            </Badge>
            {!person.active && <Badge variant="secondary">Nieaktywna</Badge>}
          </div>
          <div className="space-y-1 text-sm text-gray-600">
            {person.specialization && (
              <p className="font-medium text-gray-900">{person.specialization}</p>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{person.email}</span>
              </div>
              {person.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>{person.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="flex flex-col gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(index, 'up')}
              disabled={!canMoveUp}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onMove(index, 'down')}
              disabled={!canMoveDown}
              className="h-6 w-6"
            >
              <GripVertical className="h-3 w-3" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => onEdit(index)}>
            Edytuj
          </Button>
          <ContactPersonDeleteDialog
            personName={`${person.firstName} ${person.lastName}`}
            onConfirm={() => onDelete(index)}
          />
        </div>
      </div>
    </div>
  );
}
