import { ProgramPageType } from '@/types/program';

export const CONTACT_INFO = {
  institution: 'Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie',
  address: {
    street: 'ul. Wały Chrobrego 4',
    city: '70-500 Szczecin',
  },
  phone: '+48 91 484 67 00',
  email: 'wfos@wfos.szczecin.pl',
} as const;

export const PROGRAM_STATUS_MAPPING = {
  otwarty: 'Nabór otwarty',
  planowany: 'Planowany',
  zakończony: 'Zakończony',
  realizacja: 'W realizacji',
  zamknięty: 'Nabór zamknięty',
} as const;

export const CATEGORY_DISPLAY_MAPPING = {
  'Osoba fizyczna': 'Mieszkańcy',
  Przedsiębiorca: 'Przedsiębiorcy',
  'Jednostka samorządu terytorialnego': 'Jednostki publiczne',
  'Państwowe jednostki budżetowe': 'Instytucje',
} as const;

export const initialProgramPages: ProgramPageType[] = [
  {
    id: 1,
    programLink: 'https://example.com/moja-woda',
    name: 'Przykładowa Strona Tekstowa',
    slug: 'przykladowa-strona-tekstowa',
    maxSupport: 'od 6 000',
    funding: 'do 80%',
    deadline: '30.06.2024',
    budget: '100 000 000 zł',
    description: 'Dofinansowanie systemów retencji wody deszczowej i systemów gospodarowania wodą',

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
    beneficiaryCategories: ['Osoba fizyczna', 'Przedsiębiorca'],
    status: 'otwarty',
    startDate: new Date('2023-03-15'),
    endDate: new Date('2024-06-30'),
  },
  {
    id: 2,
    name: 'Test plików PDF ze spacjami',
    description: 'Dofinansowanie systemów retencji wody deszczowej i systemów gospodarowania wodą',

    slug: 'test',
    programLink: 'https://example.com/moja-woda',
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
    beneficiaryCategories: ['Osoba fizyczna', 'Przedsiębiorca'],
  },
  {
    id: 3,
    name: 'Polityka Prywatności',
    description: 'Dofinansowanie systemów retencji wody deszczowej i systemów gospodarowania wodą',

    slug: 'polityka-prywatnosci',
    programLink: 'https://example.com/moja-woda',
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
    beneficiaryCategories: ['Osoba fizyczna', 'Jednostka samorządu terytorialnego'],
  },
  {
    id: 4,
    beneficiaryCategories: ['Przedsiębiorca', 'Jednostka samorządu terytorialnego'],
    name: 'Program Czyste Powietrze - Szczegóły',
    description: 'Dofinansowanie systemów retencji wody deszczowej i systemów gospodarowania wodą',

    slug: 'czyste-powietrze',
    programLink: 'https://example.com/moja-woda',
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
