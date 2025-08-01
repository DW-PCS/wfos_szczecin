import { AboutContent, AboutTabValue } from '@/types/admin/admin-about';

export const initialAboutPageContent: AboutContent = {
  hero: {
    title: 'O nas',
    backgroundImage: '/placeholder.svg?height=350&width=1200',
  },
  intro: {
    badge: '30+ lat doświadczenia w ekologii',
    title: 'WFOŚiGW –',
    highlightedWord: 'SKUTECZNIE',
    description:
      'Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie od ponad 30 lat wspiera projekty ekologiczne, współfinansując działania samorządów, szpitali, szkół, uczelni wyższych, organizacji pozarządowych, przedsiębiorców oraz wszystkich mieszkańców województwa Zachodniopomorskiego.',
    ctaText: 'Zobacz nasze programy',
    ctaLink: '/programy',
  },
  missionVision: [
    {
      id: 1,
      title: 'Nasza Misja',
      description:
        'Wspieramy rozwój zrównoważony województwa zachodniopomorskiego poprzez finansowanie projektów ekologicznych, które poprawiają jakość środowiska i życia mieszkańców.',
      icon: 'lightning',
      gradient: 'from-primary-green to-primary-lime',
      order: 1,
      active: true,
    },
    {
      id: 2,
      title: 'Nasza Wizja',
      description:
        'Być liderem w finansowaniu projektów ekologicznych, tworząc czyste i zdrowe środowisko dla przyszłych pokoleń w regionie zachodniopomorskim.',
      icon: 'eye',
      gradient: 'from-primary-blue to-primary-navy',
      order: 2,
      active: true,
    },
  ],
  achievements: [
    {
      id: 1,
      number: '1000+',
      label: 'Zrealizowanych projektów',
      icon: 'BarChart3',
      order: 1,
      active: true,
      placement: '1',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: 2,
      number: '50M+',
      label: 'Zł dofinansowania rocznie',
      icon: 'DollarSign',
      order: 2,
      active: true,
      placement: '2',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: 3,
      number: '300+',
      label: 'Partnerów instytucjonalnych',
      icon: 'Users',
      order: 3,
      active: true,
      placement: '3',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: 4,
      number: '30+',
      label: 'Lat doświadczenia',
      icon: 'Leaf',
      order: 4,
      active: true,
      placement: '4',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  ],
  managementBoard: [
    {
      id: 1,
      name: 'Waldemar Miśko',
      role: 'Prezes Zarządu',
      description:
        'Doświadczony menedżer z wieloletnim stażem w zarządzaniu funduszami ekologicznymi.',
      order: 1,
      active: true,
    },
    {
      id: 2,
      name: 'Marcin Zamaro',
      role: 'Zastępca Prezesa Zarządu',
      description: 'Specjalista w dziedzinie finansów i zarządzania projektami środowiskowymi.',
      order: 2,
      active: true,
    },
  ],
  supervisoryBoard: [
    {
      id: 1,
      name: 'Paweł Jaworski',
      role: 'Przewodniczący Rady Nadzorczej',
      order: 1,
      active: true,
    },
    {
      id: 2,
      name: 'Artur Nycz',
      role: 'Wiceprzewodniczący Rady Nadzorczej',
      order: 2,
      active: true,
    },
    { id: 3, name: 'Aneta Zaremba', role: 'Przedstawiciel NFOŚiGW', order: 3, active: true },
    {
      id: 4,
      name: 'Artur Pomianowski',
      role: 'Przedstawiciel Ministra Klimatu',
      order: 4,
      active: true,
    },
    { id: 5, name: 'Arkadiusz Malkowski', role: 'Przedstawiciel Wojewody', order: 5, active: true },
  ],
  teams: [
    {
      id: 1,
      name: 'Zespół Finansowy',
      description: 'Odpowiada za zarządzanie finansami funduszu i rozliczanie projektów.',
      icon: 'Briefcase',
      order: 1,
      active: true,
    },
    {
      id: 2,
      name: 'Zespół Projektowy',
      description: 'Zajmuje się oceną i monitorowaniem realizacji projektów ekologicznych.',
      icon: 'FileText',
      order: 2,
      active: true,
    },
    {
      id: 3,
      name: 'Zespół Prawny',
      description: 'Zapewnia obsługę prawną i zgodność działań z obowiązującymi przepisami.',
      icon: 'Scale',
      order: 3,
      active: true,
    },
    {
      id: 4,
      name: 'Zespół Komunikacji',
      description: 'Odpowiada za komunikację zewnętrzną i promocję działań funduszu.',
      icon: 'Megaphone',
      order: 4,
      active: true,
    },
    {
      id: 5,
      name: 'Zespół IT',
      description: 'Zapewnia wsparcie technologiczne i rozwój systemów informatycznych.',
      icon: 'Monitor',
      order: 5,
      active: true,
    },
    {
      id: 6,
      name: 'Zespół Administracyjny',
      description: 'Odpowiada za sprawne funkcjonowanie biura i obsługę administracyjną.',
      icon: 'Building',
      order: 6,
      active: true,
    },
  ],
  cta: {
    title: 'Dołącz do nas',
    description:
      'Jesteś zainteresowany współpracą lub chcesz dowiedzieć się więcej o naszych programach? Skontaktuj się z nami!',
    primaryButtonText: 'Skontaktuj się z nami',
    primaryButtonLink: '/kontakt',
    secondaryButtonText: 'Sprawdź oferty pracy',
    secondaryButtonLink: '/kariera',
  },
  active: true,
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
};

export const VALID_TABS: readonly AboutTabValue[] = [
  'hero',
  'intro',
  'mission',
  'stats',
  'structure',
  'teams',
  'cta',
] as const;
export const DEFAULT_TAB: AboutTabValue = 'hero';
