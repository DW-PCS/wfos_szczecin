import { ContactInfoItem, LegalLink } from '@/types/footer';
import { Clock, Facebook, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export const CONTACT_INFO: readonly ContactInfoItem[] = [
  {
    icon: MapPin,
    bgColor: 'bg-primary-green/20',
    iconColor: 'text-primary-green',
    title: 'Siedziba główna',
    content: ['ul. Wały Chrobrego 4', '70-500 Szczecin'],
  },
  {
    icon: Phone,
    bgColor: 'bg-primary-blue/20',
    iconColor: 'text-primary-blue',
    title: 'Telefon',
    content: ['+48 91 484 99 50'],
    href: 'tel:+48914849950',
    hoverColor: 'hover:text-primary-blue',
  },
  {
    icon: Mail,
    bgColor: 'bg-primary-lime/20',
    iconColor: 'text-primary-lime',
    title: 'E-mail',
    content: ['sekretariat@wfos.szczecin.pl'],
    href: 'mailto:sekretariat@wfos.szczecin.pl',
    hoverColor: 'hover:text-primary-lime',
  },
  {
    icon: Clock,
    bgColor: 'bg-primary-green/20',
    iconColor: 'text-primary-green',
    title: 'Godziny pracy',
    content: ['Pn-Pt: 7:30-15:30'],
  },
] as const;

export const ADDITIONAL_LINKS = [
  { label: 'Design System', href: '/design-system' },
  { label: 'Dostępność', href: '/dostepnosc' },
] as const;

export const LEGAL_LINKS: readonly LegalLink[] = [
  { label: 'BIP', href: '/bip', external: true },
  { label: 'Deklaracja dostępności', href: '/dostepnosc' },
  { label: 'Polityka prywatności', href: '/prywatnosc' },
  { label: 'Regulamin serwisu', href: '/regulamin' },
  { label: 'Zgłoszenie nadużycia', href: '/zgloszenie' },
  { label: 'Mapa serwisu', href: '/mapa' },
] as const;


export const QUICK_LINKS = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Programy dofinansowania', href: '/oferta' },
  { label: 'Portal Beneficjenta', href: '/portal' },
  { label: 'Aktualności', href: '/aktualnosci' },
  { label: 'Biuletyn "Naturalnie"', href: '/biuletyn' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;


export const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
] as const;
