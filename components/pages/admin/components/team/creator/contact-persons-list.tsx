'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactPersonCard } from './contact-person-card';
import { ContactPerson } from '@/types/component-selector';


interface ContactPersonsListProps {
  contactPersons: ContactPerson[];
  onEdit: (index: number) => void;
  onMove: (index: number, direction: 'up' | 'down') => void;
  onDelete: (index: number) => void;
}

export function ContactPersonsList({
  contactPersons,
  onEdit,
  onMove,
  onDelete,
}: ContactPersonsListProps) {
  if (contactPersons.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Osoby w zespole ({contactPersons.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contactPersons.map((person, index) => (
            <ContactPersonCard
              key={person.id}
              person={person}
              index={index}
              canMoveUp={index > 0}
              canMoveDown={index < contactPersons.length - 1}
              onEdit={onEdit}
              onMove={onMove}
              onDelete={onDelete}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
