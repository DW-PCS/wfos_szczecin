'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Send } from 'lucide-react';
import React from 'react';

interface ContactFormProps {
  title?: string;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  privacyPolicyLink?: string;
}

export function ContactForm({
  title = 'Napisz do nas',
  onSubmit,
  privacyPolicyLink = '/polityka-prywatnosci',
}: ContactFormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Form data:', data);
      alert('Wiadomość została wysłana (symulacja).');
      event.currentTarget.reset();
    }
  };

  return (
    <div className="relative w-full sm:max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full p-6 md:p-8">
        <h2 className="text-xl font-semibold text-primary-navy mb-6 text-center">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Imię i nazwisko
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              placeholder="Jan Kowalski"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Adres e-mail
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              placeholder="jan.kowalski@example.com"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
              Temat
            </Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              placeholder="Pytanie dotyczące..."
            />
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Wiadomość
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green resize-none"
              placeholder="Twoja wiadomość..."
            />
          </div>

          <div className="flex items-start">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-green border-slate-300 rounded focus:ring-primary-green mt-0.5"
            />
            <Label htmlFor="privacy" className="ml-2 block text-xs text-slate-600">
              Wyrażam zgodę na przetwarzanie moich danych osobowych.
              <a href={privacyPolicyLink} className="text-primary-green hover:underline ml-1">
                Dowiedz się więcej.
              </a>
            </Label>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-primary-green hover:bg-primary-lime text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="w-4 mr-2" />
              Wyślij wiadomość
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
