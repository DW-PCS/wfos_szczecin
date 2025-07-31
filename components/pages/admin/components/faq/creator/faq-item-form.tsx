'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Plus } from 'lucide-react';

const categoryOptions = [
  'Wnioski',
  'Terminy',
  'Dokumenty',
  'Kontakt',
  'Programy',
  'Płatności',
  'Procedury',
  'Inne',
];

interface FAQFormData {
  question: string;
  answer: string;
  category: string;
  popular: boolean;
  isActive: boolean;
  order: number;
}

interface FAQItemFormProps {
  currentFAQ: FAQFormData;
  onCurrentFAQChange: (data: Partial<FAQFormData>) => void;
  onAddFAQ: () => void;
  onCancelEdit: () => void;
  editingIndex: number | null;
  canAdd: boolean;
}

export function FAQItemForm({
  currentFAQ,
  onCurrentFAQChange,
  onAddFAQ,
  onCancelEdit,
  editingIndex,
  canAdd,
}: FAQItemFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{editingIndex !== null ? 'Edytuj pytanie' : 'Dodaj nowe pytanie'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="question">Pytanie</Label>
          <Input
            id="question"
            value={currentFAQ.question}
            onChange={e => onCurrentFAQChange({ question: e.target.value })}
            placeholder="Wpisz pytanie..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="answer">Odpowiedź</Label>
          <Textarea
            id="answer"
            value={currentFAQ.answer}
            onChange={e => onCurrentFAQChange({ answer: e.target.value })}
            placeholder="Wpisz odpowiedź..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Kategoria</Label>
          <Select
            value={currentFAQ.category}
            onValueChange={value => onCurrentFAQChange({ category: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="popular"
              checked={currentFAQ.popular}
              onCheckedChange={checked => onCurrentFAQChange({ popular: checked })}
            />
            <Label htmlFor="popular">Popularne</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="faqActive"
              checked={currentFAQ.isActive}
              onCheckedChange={checked => onCurrentFAQChange({ isActive: checked })}
            />
            <Label htmlFor="faqActive">Aktywne</Label>
          </div>
        </div>

        <Button onClick={onAddFAQ} className="w-full" disabled={!canAdd}>
          <Plus className="h-4 w-4 mr-2" />
          {editingIndex !== null ? 'Zaktualizuj pytanie' : 'Dodaj pytanie'}
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
