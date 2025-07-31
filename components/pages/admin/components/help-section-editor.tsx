'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { HelpSectionComponent, HelpSectionContact } from '@/types/component-selector';

import { Mail, MessageCircle, Phone, Plus, Save, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface HelpSectionEditorProps {
  helpSection: HelpSectionComponent;
  onSave: (updatedSection: HelpSectionComponent) => void;
  onCancel: () => void;
}

export function HelpSectionEditor({ helpSection, onSave, onCancel }: HelpSectionEditorProps) {
  const [formData, setFormData] = useState<HelpSectionComponent>(helpSection);
  const [editingContactIndex, setEditingContactIndex] = useState<number | null>(null);
  const [currentContact, setCurrentContact] = useState<Partial<HelpSectionContact>>({
    type: 'phone',
    title: '',
    description: '',
    value: '',
    icon: 'Phone',
    active: true,
    order: (formData.contacts?.length || 0) + 1,
  });

  const contactTypeOptions = [
    { value: 'phone', label: 'Telefon', icon: 'Phone' },
    { value: 'email', label: 'Email', icon: 'Mail' },
    { value: 'chat', label: 'Czat', icon: 'MessageCircle' },
  ];

  const placementOptions = [
    { value: 'homepage', label: 'Strona główna' },
    { value: 'contact', label: 'Kontakt' },
    { value: 'programs', label: 'Programy' },
    { value: 'about', label: 'O nas' },
    { value: 'custom', label: 'Niestandardowe' },
  ];

  const handlePlacementChange = (placement: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        placements: [...formData.placements, placement as any],
      });
    } else {
      setFormData({
        ...formData,
        placements: formData.placements.filter((p: string) => p !== placement),
      });
    }
  };

  const handleAddContact = () => {
    if (!currentContact.title || !currentContact.value) return;

    const newContact: HelpSectionContact = {
      id: Date.now(),
      type: currentContact.type!,
      title: currentContact.title!,
      description: currentContact.description!,
      value: currentContact.value!,
      icon: currentContact.icon!,
      active: currentContact.active!,
      order: currentContact.order!,
    };

    if (editingContactIndex !== null) {
      const updatedContacts = [...formData.contacts];
      updatedContacts[editingContactIndex] = {
        ...newContact,
        id: formData.contacts[editingContactIndex].id,
      };
      setFormData({ ...formData, contacts: updatedContacts });
      setEditingContactIndex(null);
    } else {
      setFormData({
        ...formData,
        contacts: [...formData.contacts, newContact],
      });
    }

    setCurrentContact({
      type: 'phone',
      title: '',
      description: '',
      value: '',
      icon: 'Phone',
      active: true,
      order: (formData.contacts?.length || 0) + 2,
    });
  };

  const handleEditContact = (index: number) => {
    const contact = formData.contacts[index];
    setCurrentContact({
      type: contact.type,
      title: contact.title,
      description: contact.description,
      value: contact.value,
      icon: contact.icon,
      active: contact.active,
      order: contact.order,
    });
    setEditingContactIndex(index);
  };

  const handleDeleteContact = (index: number) => {
    const updatedContacts = formData.contacts.filter((_: unknown, i: number) => i !== index);
    setFormData({ ...formData, contacts: updatedContacts });
  };

  const handleSave = () => {
    const updatedSection: HelpSectionComponent = {
      ...formData,
      updatedAt: new Date().toISOString(),
    };
    onSave(updatedSection);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ustawienia sekcji</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tytuł sekcji</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="Nie znalazłeś odpowiedzi na swoje pytanie?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Opis</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                placeholder="Nasz zespół ekspertów jest gotowy pomóc..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Miejsca wyświetlania</Label>
              <div className="space-y-2">
                {placementOptions.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`placement-${option.value}`}
                      checked={formData.placements.includes(option.value as any)}
                      onCheckedChange={checked =>
                        handlePlacementChange(option.value, checked as boolean)
                      }
                    />
                    <Label htmlFor={`placement-${option.value}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={checked => setFormData({ ...formData, active: checked })}
              />
              <Label htmlFor="active">Sekcja aktywna</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {editingContactIndex !== null ? 'Edytuj kontakt' : 'Dodaj kontakt'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactType">Typ kontaktu</Label>
              <Select
                value={currentContact.type}
                onValueChange={(value: any) => {
                  const selectedType = contactTypeOptions.find(opt => opt.value === value);
                  setCurrentContact({
                    ...currentContact,
                    type: value,
                    icon: selectedType?.icon || 'Phone',
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contactTypeOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactTitle">Tytuł</Label>
              <Input
                id="contactTitle"
                value={currentContact.title}
                onChange={e => setCurrentContact({ ...currentContact, title: e.target.value })}
                placeholder="np. Zadzwoń do nas"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactDescription">Opis</Label>
              <Textarea
                id="contactDescription"
                value={currentContact.description}
                onChange={e =>
                  setCurrentContact({ ...currentContact, description: e.target.value })
                }
                placeholder="np. Poniedziałek - Piątek\n8:00 - 16:00"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactValue">Wartość</Label>
              <Input
                id="contactValue"
                value={currentContact.value}
                onChange={e => setCurrentContact({ ...currentContact, value: e.target.value })}
                placeholder="np. +48 91 xxx xx xx"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="contactActive"
                checked={currentContact.active}
                onCheckedChange={checked =>
                  setCurrentContact({ ...currentContact, active: checked })
                }
              />
              <Label htmlFor="contactActive">Kontakt aktywny</Label>
            </div>

            <Button
              onClick={handleAddContact}
              className="w-full"
              disabled={!currentContact.title || !currentContact.value}
            >
              <Plus className="h-4 w-4 mr-2" />
              {editingContactIndex !== null ? 'Zaktualizuj kontakt' : 'Dodaj kontakt'}
            </Button>

            {editingContactIndex !== null && (
              <Button
                variant="outline"
                onClick={() => {
                  setEditingContactIndex(null);
                  setCurrentContact({
                    type: 'phone',
                    title: '',
                    description: '',
                    value: '',
                    icon: 'Phone',
                    active: true,
                    order: (formData.contacts?.length || 0) + 1,
                  });
                }}
                className="w-full"
              >
                Anuluj edycję
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {formData.contacts && formData.contacts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Kontakty w sekcji ({formData.contacts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {formData.contacts.map((contact: any, index: number) => (
                <div key={contact.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {contact.icon === 'Phone' && <Phone className="h-4 w-4 text-primary-green" />}
                    {contact.icon === 'Mail' && <Mail className="h-4 w-4 text-primary-green" />}
                    {contact.icon === 'MessageCircle' && (
                      <MessageCircle className="h-4 w-4 text-primary-green" />
                    )}
                    <span className="font-medium">{contact.title}</span>
                    {!contact.active && (
                      <Badge variant="secondary" className="text-xs">
                        Nieaktywny
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                  <p className="text-sm font-medium mb-3">{contact.value}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditContact(index)}>
                      Edytuj
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteContact(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onCancel}>
          Anuluj
        </Button>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Zapisz zmiany
        </Button>
      </div>
    </div>
  );
}
