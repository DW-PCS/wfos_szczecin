import { Program } from '@/types/program';
import { Building, Home, Leaf, Shield, Users } from 'lucide-react';

export const programCategories = [
  {
    id: 'osoba-fizyczna',
    title: 'Osoba fizyczna',
    icon: Users,
  },
  {
    id: 'przedsiebiorca',
    title: 'Przedsiębiorca',
    icon: Building,
  },
  {
    id: 'jst',
    title: 'Jednostka samorządu terytorialnego',
    icon: Home,
  },
  {
    id: 'pjb',
    title: 'Państwowe jednostki budżetowe',
    icon: Shield,
  },
  {
    id: 'pozostale',
    title: 'Pozostałe podmioty i organizacje',
    icon: Leaf,
  },
] as const;

export const initialPrograms: Program[] = [
  {
    id: 1,
    name: 'Czyste Powietrze',
    description:
      'Program dofinansowania wymiany źródeł ciepła i termomodernizacji budynków mieszkalnych',
    status: 'otwarty',
    budget: '500 000 000 zł',
    deadline: '31.12.2024',
    beneficiaryCategories: ['osoba-fizyczna'],
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-12-31'),
    maxSupport: 'do 135 000 zł',
    funding: 'do 100%',
    programLink: 'https://czystepowietrze.gov.pl',
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Moja Woda',
    description: 'Dofinansowanie systemów retencji wody deszczowej i systemów gospodarowania wodą',
    status: 'otwarty',
    budget: '100 000 000 zł',
    deadline: '30.06.2024',
    beneficiaryCategories: ['osoba-fizyczna', 'przedsiebiorca'],
    startDate: new Date('2023-03-15'),
    endDate: new Date('2024-06-30'),
    maxSupport: 'do 6 000 zł',
    funding: 'do 80%',
    programLink: 'https://example.com/moja-woda',
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Bezpieczny Strażak',
    description:
      'Dofinansowanie zakupu sprzętu i wyposażenia dla jednostek Ochotniczych Straży Pożarnych',
    status: 'planowany',
    budget: '50 000 000 zł',
    deadline: 'I kwartał 2025',
    beneficiaryCategories: ['jst'],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31'),
    maxSupport: 'do 20 000 zł',
    funding: 'do 90%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'Zielona Energia',
    description: 'Program wsparcia instalacji odnawialnych źródeł energii dla gospodarstw domowych',
    status: 'zakończony',
    budget: '200 000 000 zł',
    deadline: 'Zakończony',
    beneficiaryCategories: ['osoba-fizyczna'],
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-12-31'),
    maxSupport: 'do 15 000 zł',
    funding: 'do 70%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'Ekologiczny Transport',
    description: 'Wsparcie dla zakupu pojazdów elektrycznych i hybrydowych',
    status: 'otwarty',
    budget: '150 000 000 zł',
    deadline: '30.09.2025',
    beneficiaryCategories: ['osoba-fizyczna', 'przedsiebiorca'],
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-09-30'),
    maxSupport: 'do 25 000 zł',
    funding: 'do 60%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: 'Odnawialne Źródła',
    description: 'Program instalacji paneli fotowoltaicznych i pomp ciepła',
    status: 'planowany',
    budget: '300 000 000 zł',
    deadline: 'II kwartał 2025',
    beneficiaryCategories: ['osoba-fizyczna', 'przedsiebiorca'],
    startDate: new Date('2025-04-01'),
    endDate: new Date('2026-03-31'),
    maxSupport: 'do 30 000 zł',
    funding: 'do 85%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    name: 'Termomodernizacja',
    description: 'Kompleksowa termomodernizacja budynków mieszkalnych i użyteczności publicznej',
    status: 'otwarty',
    budget: '400 000 000 zł',
    deadline: '31.12.2025',
    beneficiaryCategories: ['osoba-fizyczna', 'jst'],
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-12-31'),
    maxSupport: 'do 40 000 zł',
    funding: 'do 75%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: 'Gospodarka Wodna',
    description: 'Modernizacja systemów wodociągowych i kanalizacyjnych',
    status: 'otwarty',
    budget: '250 000 000 zł',
    deadline: '30.06.2025',
    beneficiaryCategories: ['jst'],
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-06-30'),
    maxSupport: 'do 12 000 zł',
    funding: 'do 80%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    name: 'Ochrona Powietrza',
    description: 'Projekty związane z poprawą jakości powietrza i redukcją emisji',
    status: 'planowany',
    budget: '180 000 000 zł',
    deadline: 'III kwartał 2025',
    beneficiaryCategories: ['przedsiebiorca', 'jst'],
    startDate: new Date('2025-07-01'),
    endDate: new Date('2026-06-30'),
    maxSupport: 'do 18 000 zł',
    funding: 'do 70%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    name: 'Energia Słoneczna',
    description: 'Wsparcie dla instalacji fotowoltaicznych w sektorze publicznym',
    status: 'otwarty',
    budget: '120 000 000 zł',
    deadline: '31.08.2025',
    beneficiaryCategories: ['pjb'],
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-08-31'),
    maxSupport: 'do 22 000 zł',
    funding: 'do 90%',
    programLink: null,
    linkedPageSlug: null,
    showOnHomepage: false,
    type: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getCategoryById = (categoryId: string) => {
  return programCategories.find(category => category.id === categoryId);
};

export const getCategoriesByIds = (categoryIds: string[]) => {
  return categoryIds.map(id => getCategoryById(id)).filter(Boolean);
};

export type CategoryId = (typeof programCategories)[number]['id'];
