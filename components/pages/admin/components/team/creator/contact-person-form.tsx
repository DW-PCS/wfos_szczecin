'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus } from 'lucide-react';

interface ContactPersonFormData {
  firstName: string;
  lastName: string;
  specialization: string;
  email: string;
  phone: string;
  isActive: boolean;
  order: number;
}

interface ContactPersonFormProps {
  currentPerson: ContactPersonFormData;
  onCurrentPersonChange: (data: Partial<ContactPersonFormData>) => void;
  onAddPerson: () => void;
  onCancelEdit: () => void;
  editingIndex: number | null;
  canAdd: boolean;
}

export function ContactPersonForm({
  currentPerson,
  onCurrentPersonChange,
  onAddPerson,
  onCancelEdit,
  editingIndex,
  canAdd,
}: ContactPersonFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{editingIndex !== null ? 'Edytuj osobę' : 'Dodaj osobę kontaktową'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Imię</Label>
            <Input
              id="firstName"
              value={currentPerson.firstName}
              onChange={e => onCurrentPersonChange({ firstName: e.target.value })}
              placeholder="Imię"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nazwisko</Label>
            <Input
              id="lastName"
              value={currentPerson.lastName}
              onChange={e => onCurrentPersonChange({ lastName: e.target.value })}
              placeholder="Nazwisko"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialization">Specjalizacja</Label>
          <Input
            id="specialization"
            value={currentPerson.specialization}
            onChange={e => onCurrentPersonChange({ specialization: e.target.value })}
            placeholder="np. Specjalista ds. programów ekologicznych"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={currentPerson.email}
            onChange={e => onCurrentPersonChange({ email: e.target.value })}
            placeholder="email@wfos.szczecin.pl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            value={currentPerson.phone}
            onChange={e => onCurrentPersonChange({ phone: e.target.value })}
            placeholder="np. +48 91 xxx xx xx"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="personActive"
            checked={currentPerson.isActive}
            onCheckedChange={checked => onCurrentPersonChange({ isActive: checked })}
          />
          <Label htmlFor="personActive">Osoba aktywna</Label>
        </div>

        <Button onClick={onAddPerson} className="w-full" disabled={!canAdd}>
          <Plus className="h-4 w-4 mr-2" />
          {editingIndex !== null ? 'Zaktualizuj osobę' : 'Dodaj osobę'}
        </Button>

        {editingIndex !== null && (
          <Button variant="outline" onClick={onCancelEdit} className="w-full">
            Anuluj edycję
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
