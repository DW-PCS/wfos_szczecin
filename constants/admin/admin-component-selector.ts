import { HelpCircle, MessageCircle, Users } from 'lucide-react';

export const componentTypeLabels = {
  faq: 'FAQ',
  'contact-team': 'Zespół kontaktowy',
  'help-section': 'Sekcja pomocy',
} as const;

export const componentTypeIcons = {
  faq: HelpCircle,
  'contact-team': Users,
  'help-section': MessageCircle,
} as const;

export const componentTypeOptions = [
  { value: 'faq', label: 'FAQ' },
  { value: 'contact-team', label: 'Zespół kontaktowy' },
  { value: 'help-section', label: 'Sekcja pomocy' },
] as const;
