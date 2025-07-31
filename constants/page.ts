import { ContactTeam, HelpSectionComponent } from '@/types/component-selector';
import { FAQComponent } from '@/types/faq';
import { Page } from '@/types/page';

export const initialPages: Page[] = [
  {
    id: '4',
    title: 'Przykładowa Strona Tekstowa',
    slug: 'przykladowa-strona-tekstowa',
    content:
      "<h2>Witamy na przykładowej stronie</h2><p>To jest przykładowa treść strony utworzonej w panelu administracyjnym. Możesz edytować tę treść w panelu admina w sekcji 'Strony'.</p><p>Strona obsługuje pełną funkcjonalność WYSIWYG, komponenty, SEO i media.</p><h3>Obsługa filmów YouTube</h3><p>Możesz teraz dodawać filmy YouTube po prostu wklejając link:</p><p>https://www.youtube.com/watch?v=hzDpKD1e9HI</p><p>Link automatycznie zamieni się w odtwarzacz wideo!</p>",
    metaTitle: 'Przykładowa Strona Tekstowa - WFOŚiGW',
    metaDescription:
      'Przykładowa strona tekstowa utworzona w panelu administracyjnym Wojewódzkiego Funduszu Ochrony Środowiska',
    uploadedImages: [],
    pdfFiles: [
      {
        id: 'pdf-1',
        fileName: 'przykladowy-dokument.pdf',
        displayName: 'Przykładowy dokument PDF z podglądem',
      },
    ],
    selectedComponents: [],
    author: 'Admin',
    dateAdded: new Date().toISOString(),
    published: true,
    type: 'general',
  },
  {
    id: 'test-pdf-files',
    title: 'Test plików PDF ze spacjami',
    slug: 'test',
    content:
      "<h2>Testowanie plików PDF</h2><p>Ta strona testuje obsługę plików PDF z różnymi nazwami, w tym ze spacjami.</p><p>Sprawdź poniżej sekcję 'Pliki do pobrania' - wszystkie pliki powinny działać poprawnie:</p><ul><li>Podgląd w modalnym oknie</li><li>Pobieranie plików</li><li>Obsługa nazw ze spacjami</li></ul><h3>Instrukcje obsługi</h3><p>Poniżej znajdziesz instrukcje w formacie PDF. Każdy plik można obejrzeć w podglądzie lub pobrać bezpośrednio.</p>",
    metaTitle: 'Test plików PDF - WFOŚiGW',
    metaDescription: 'Strona testowa do sprawdzania obsługi plików PDF z różnymi nazwami',
    uploadedImages: [],
    pdfFiles: [
      {
        id: 'pdf-2',
        fileName: 'Instrukcja TRANZYT i PCS 14.06.2025.pdf',
        displayName: 'Instrukcja obsługi systemu TRANZYT i PCS',
      },
      {
        id: 'pdf-3',
        fileName: 'instrukcja dla AIS PLUS i PCS 14.06.2025.pdf',
        displayName: 'Instrukcja dla systemu AIS PLUS i PCS',
      },
      {
        id: 'pdf-4',
        fileName: 'przykladowy-dokument.pdf',
        displayName: 'Przykładowy dokument (bez spacji w nazwie)',
      },
    ],
    selectedComponents: [],
    author: 'Admin',
    dateAdded: new Date().toISOString(),
    published: true,
    type: 'general',
  },
  {
    id: 'polityka-prywatnosci',
    title: 'Polityka Prywatności',
    slug: 'polityka-prywatnosci',
    content:
      '<h2>Polityka Prywatności</h2><p>Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych przez Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie.</p><h3>Administrator danych</h3><p>Administratorem Państwa danych osobowych jest Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie.</p>',
    metaTitle: 'Polityka Prywatności - WFOŚiGW',
    metaDescription:
      'Polityka prywatności Wojewódzkiego Funduszu Ochrony Środowiska i Gospodarki Wodnej w Szczecinie',
    uploadedImages: [],
    pdfFiles: [],
    selectedComponents: [],
    author: 'Admin',
    dateAdded: new Date().toISOString(),
    published: true,
    type: 'general',
  },
  {
    id: 'czyste-powietrze-szczegoly',
    title: 'Program Czyste Powietrze - Szczegóły',
    slug: 'czyste-powietrze-szczegoly',
    content:
      '<h2>Program Czyste Powietrze</h2><p>Program Czyste Powietrze to kompleksowy system wsparcia dla właścicieli domów jednorodzinnych w Polsce, mający na celu poprawę jakości powietrza poprzez wymianę starych, nieekologicznych źródeł ciepła na nowoczesne, ekologiczne systemy grzewcze.</p><h3>Cele programu</h3><ul><li>Poprawa jakości powietrza w Polsce</li><li>Redukcja emisji pyłów i gazów cieplarnianych</li><li>Zwiększenie efektywności energetycznej budynków</li><li>Rozwój rynku technologii przyjaznych środowisku</li></ul><h3>Kto może skorzystać?</h3><p>Program skierowany jest do właścicieli domów jednorodzinnych, którzy chcą wymienić stare źródła ciepła na nowoczesne, ekologiczne systemy grzewcze.</p><h3>Rodzaje dofinansowania</h3><p>W ramach programu można otrzymać dofinansowanie na:</p><ul><li>Wymianę źródła ciepła</li><li>Termomodernizację budynku</li><li>Instalację odnawialnych źródeł energii</li></ul><h3>Wysokość dofinansowania</h3><p>Maksymalna kwota dofinansowania wynosi <strong>135 000 zł</strong> i może pokryć do <strong>100%</strong> kosztów inwestycji w przypadku gospodarstw domowych o najniższych dochodach.</p>',
    metaTitle: 'Program Czyste Powietrze - Szczegóły | WFOŚiGW',
    metaDescription:
      'Szczegółowe informacje o programie Czyste Powietrze - cele, beneficjenci, wysokość dofinansowania i procedury.',
    uploadedImages: [],
    pdfFiles: [
      {
        id: 'pdf-czyste-powietrze-1',
        fileName: 'regulamin-czyste-powietrze.pdf',
        displayName: 'Regulamin programu Czyste Powietrze',
      },
      {
        id: 'pdf-czyste-powietrze-2',
        fileName: 'wniosek-czyste-powietrze.pdf',
        displayName: 'Formularz wniosku o dofinansowanie',
      },
    ],
    selectedComponents: [],
    author: 'Admin',
    dateAdded: new Date().toISOString(),
    published: true,
    type: 'program',
  },
];

export const mockFAQComponents: FAQComponent[] = [
  {
    id: 1,
    name: 'FAQ Strona Główna',
    description: 'Główne FAQ wyświetlane na stronie głównej',
    placement: 'homepage',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    faqItems: [],
  },
  {
    id: 2,
    name: 'FAQ Kontakt',
    description: 'FAQ wyświetlane na stronie kontaktowej',
    placement: 'contact',
    isActive: true,
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    faqItems: [],
  },
];

export const mockContactTeams: ContactTeam[] = [
  {
    id: 1,
    name: 'Zespół ds. Obsługi Wniosków (Biuro Szczecin)',
    description: 'Główny zespół obsługujący wnioski w biurze szczecińskim',
    address: 'ul. Solskiego 3',
    city: 'Szczecin',
    placement: 'contact',
    isActive: true,
    order: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    contactPersons: [],
  },
];

export const mockHelpSections: HelpSectionComponent[] = [
  {
    id: 1,
    title: 'Nie znalazłeś odpowiedzi na swoje pytanie?',
    description:
      'Nasz zespół ekspertów jest gotowy pomóc. Skontaktuj się z nami w dogodny dla Ciebie sposób.',
    placements: ['homepage', 'contact'],
    customPlacements: [],
    active: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    contacts: [],
  },
];
