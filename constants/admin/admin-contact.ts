import { ContactPageContent, ContactTabValue } from '@/types/admin/admin-contact';

export const ICON_OPTIONS = [
  { value: 'Building', label: 'Budynek' },
  { value: 'MapPin', label: 'Lokalizacja' },
  { value: 'Users', label: 'Użytkownicy' },
  { value: 'Phone', label: 'Telefon' },
  { value: 'Mail', label: 'Email' },
];

export const INITIAL_CONTACT_PAGE_CONTENT: ContactPageContent = {
  id: 1,
  hero: {
    title: 'Skontaktuj się z nami',
    description:
      'Masz pytania lub potrzebujesz wsparcia? Jesteśmy tutaj, aby pomóc. Wybierz preferowaną formę kontaktu.',
    buttonText: 'Dane kontaktowe',
  },
  form: {
    title: 'Napisz do nas',
    nameLabel: 'Imię i nazwisko',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'Adres e-mail',
    emailPlaceholder: 'jan.kowalski@example.com',
    subjectLabel: 'Temat',
    subjectPlaceholder: 'Pytanie dotyczące...',
    messageLabel: 'Wiadomość',
    messagePlaceholder: 'Twoja wiadomość...',
    privacyText: 'Wyrażam zgodę na przetwarzanie moich danych osobowych.',
    privacyLink: '/polityka-prywatnosci',
    submitButtonText: 'Wyślij wiadomość',
  },
  map: {
    title: 'Znajdź nas',
    description: 'WFOŚiGW w Szczecinie\nul. Solskiego 3, 71-323 Szczecin',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8!2d14.552812!3d53.428543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093a7b8c8b8b%3A0x1234567890abcdef!2sul.%20Solskiego%203%2C%2071-323%20Szczecin%2C%20Poland!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl',
    active: true,
  },
  headquarters: {
    title: 'Siedziba Główna',
    description: 'Nasze główne biuro w Szczecinie',
  },
  otherOffices: {
    title: 'Pozostałe Biura',
    description: 'Nasze biura terenowe i punkty obsługi',
  },
  offices: [
    {
      id: 1,
      type: 'Siedziba Główna',
      name: 'WFOŚiGW w Szczecinie',
      icon: 'Building',
      address: 'ul. Solskiego 3, 71-323 Szczecin',
      phone: '91 48-55-100',
      email: 'kancelaria@wfos.szczecin.pl',
      mapLink: 'https://maps.google.com/?q=ul.+Solskiego+3,+71-323+Szczecin',
      order: 1,
      active: true,
      isHeadquarters: true,
    },
    {
      id: 2,
      type: 'Biuro Terenowe',
      name: 'Biuro w Koszalinie',
      icon: 'MapPin',
      address: 'ul. Zwycięstwa 111, 75-601 Koszalin',
      phone: '94 34-67-200',
      email: 'koszalin@wfos.szczecin.pl',
      mapLink: 'https://maps.google.com/?q=ul.+Zwycięstwa+111,+75-601+Koszalin',
      order: 2,
      active: true,
      isHeadquarters: false,
    },
    {
      id: 3,
      type: 'Obsługa Osób Fizycznych',
      name: 'Zespół ds. Obsługi Osób Fizycznych',
      icon: 'Users',
      address: 'ul. Jagiellońska 32/U5, 70-382 Szczecin',
      phone: '91 48-55-100',
      email: 'kancelaria.zof@wfos.szczecin.pl',
      mapLink: 'https://maps.google.com/?q=ul.+Jagiellońska+32/U5,+70-382+Szczecin',
      order: 3,
      active: true,
      isHeadquarters: false,
    },
    {
      id: 4,
      type: 'Punkt Obsługi',
      name: 'Punkt Obsługi Osób Fizycznych w Szczecinku',
      icon: 'MapPin',
      address: 'pl. Wolności 8, 78-400 Szczecinek',
      phone: '94 37-50-480',
      email: 'szczecinek@wfos.szczecin.pl',
      mapLink: 'https://maps.google.com/?q=pl.+Wolności+8,+78-400+Szczecinek',
      order: 4,
      active: true,
      isHeadquarters: false,
    },
  ],
  active: true,
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
};

export const VALID_TABS: readonly ContactTabValue[] = [
  'hero',
  'form',
  'map',
  'headquarters',
  'offices',
] as const;

export const DEFAULT_TAB: ContactTabValue = 'hero';
