import { ContactOption, FAQComponent } from '@/types/faq';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export const DEFAULT_CONTACT_OPTIONS: ContactOption[] = [
  {
    title: 'Zadzwoń do nas',
    description: 'Poniedziałek - Piątek<br />7:30 - 15:30',
    icon: Phone,
    href: 'tel:+48914849950',
    linkText: '+48 91 484 99 50',
    type: 'link',
  },
  {
    title: 'Napisz do nas',
    description: 'Odpowiadamy w ciągu<br />24 godzin',
    icon: Mail,
    href: 'mailto:sekretariat@wfos.szczecin.pl',
    linkText: 'sekretariat@wfos.szczecin.pl',
    type: 'link',
  },
  {
    title: 'Odwiedź nas',
    description: 'ul. Wały Chrobrego 4<br />70-500 Szczecin',
    icon: MessageCircle,
    href: '/kontakt',
    linkText: 'Szczegóły kontaktu',
    type: 'button',
  },
];

export const FAQ_ANIMATION = {
  TOGGLE_DURATION: 300,
  SEARCH_DEBOUNCE: 300,
  ITEM_STAGGER: 50,
} as const;

export const FAQ_CONFIG = {
  DEFAULT_OPEN_ITEMS: [0],
  MAX_SEARCH_RESULTS: 20,
  SEARCH_MIN_LENGTH: 2,
} as const;
export const initialFAQComponents: FAQComponent[] = [
  {
    id: 1,
    name: 'FAQ Strona Główna',
    description: 'Główne FAQ wyświetlane na stronie głównej',
    placement: 'homepage',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    faqItems: [
      {
        id: 1,
        question: 'Jak mogę złożyć wniosek o dofinansowanie?',
        answer:
          "Wnioski można składać elektronicznie przez nasz Portal Beneficjenta dostępny 24/7 lub osobiście w siedzibie funduszu w godzinach pracy. Szczegółowe instrukcje krok po kroku znajdziesz w sekcji 'Jak złożyć wniosek' na naszej stronie.",
        category: 'Wnioski',
        popular: true,
        isActive: true,
        order: 1,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 2,
        question: 'Jakie rodzaje projektów są dofinansowywane?',
        answer:
          'Dofinansowujemy szeroką gamę projektów ekologicznych: instalacje odnawialnych źródeł energii (fotowoltaika, pompy ciepła), termomodernizację budynków, systemy retencji wody deszczowej, projekty ochrony przyrody, edukację ekologiczną oraz usuwanie azbestu.',
        category: 'Programy',
        popular: true,
        isActive: true,
        order: 2,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 3,
        question: 'Jakie są kryteria oceny wniosków?',
        answer:
          'Wnioski oceniane są według jasnych kryteriów: efektywność ekologiczna projektu (redukcja emisji CO2, oszczędność energii), efektywność ekonomiczna (stosunek kosztów do korzyści), zgodność z priorytetami funduszu oraz kompletność dokumentacji. Każdy program ma szczegółowe kryteria opisane w regulaminie.',
        category: 'Ocena',
        popular: false,
        isActive: true,
        order: 3,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 4,
        question: 'Ile czasu trwa rozpatrywanie wniosku?',
        answer:
          'Standardowy czas rozpatrywania wynosi 30-60 dni roboczych od daty złożenia kompletnego wniosku. Dla projektów o większej wartości (powyżej 500 tys. zł) czas może zostać wydłużony do 90 dni. O statusie wniosku informujemy na bieżąco przez Portal Beneficjenta.',
        category: 'Procedury',
        popular: true,
        isActive: true,
        order: 4,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 5,
        question: 'Jakie dokumenty są wymagane do złożenia wniosku?',
        answer:
          'Podstawowy zestaw dokumentów obejmuje: wypełniony wniosek, dokumenty potwierdzające tożsamość i prawo do nieruchomości, dokumenty finansowe (sprawozdania, PIT), dokumentację techniczną projektu, kosztorys, oraz w przypadku firm - odpisy z KRS. Pełna lista dostępna jest w regulaminie każdego programu.',
        category: 'Dokumenty',
        popular: false,
        isActive: true,
        order: 5,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 6,
        question: 'Czy mogę odwołać się od decyzji funduszu?',
        answer:
          'Tak, przysługuje Ci prawo do odwołania w terminie 14 dni kalendarzowych od otrzymania decyzji. Odwołanie należy złożyć pisemnie do Komisji Odwoławczej WFOŚiGW. Komisja rozpatruje odwołanie w terminie 30 dni i wydaje ostateczną decyzję.',
        category: 'Procedury',
        popular: false,
        isActive: true,
        order: 6,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 7,
        question: 'Jakie są wysokości dofinansowania w poszczególnych programach?',
        answer:
          "Wysokość dofinansowania zależy od programu: 'Czyste Powietrze' - do 37 000 zł, 'Moja Woda' - do 5 000 zł, programy dla przedsiębiorców - do 1 000 000 zł, projekty JST - do 200 000 zł. Dokładne kwoty i procenty dofinansowania znajdziesz w opisach poszczególnych programów.",
        category: 'Finansowanie',
        popular: true,
        isActive: true,
        order: 7,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
      {
        id: 8,
        question: 'Czy mogę składać wnioski do kilku programów jednocześnie?',
        answer:
          'Tak, możesz składać wnioski do różnych programów, pod warunkiem że projekty dotyczą różnych inwestycji. Nie można otrzymać dofinansowania z kilku źródeł na ten sam projekt. Każdy wniosek jest rozpatrywany oddzielnie.',
        category: 'Wnioski',
        popular: false,
        isActive: true,
        order: 8,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
      },
    ],
  },
  {
    id: 2,
    name: 'FAQ Kontakt',
    description: 'FAQ wyświetlane na stronie kontaktowej',
    placement: 'contact',
    isActive: true,
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    faqItems: [
      {
        id: 9,
        question: 'Jakie są godziny pracy biura?',
        answer: 'Nasze biuro jest czynne od poniedziałku do piątku w godzinach 8:00-16:00.',
        category: 'Kontakt',
        popular: false,
        isActive: true,
        order: 1,
        createdAt: '2024-01-10T14:30:00Z',
        updatedAt: '2024-01-10T14:30:00Z',
      },
    ],
  },
];
