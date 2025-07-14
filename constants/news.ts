import { Article } from '@/types/news';

export const newsArticles: Article[] = [
  {
    id: '1',
    title: 'Nowy nabór wniosków w programie Czyste Powietrze 2024',
    slug: 'nowy-nabor-wnioskow-w-programie-czyste-powietrze-2024',
    excerpt:
      'Informujemy o rozpoczęciu nowego naboru wniosków w programie Czyste Powietrze. Wnioski można składać od 15 stycznia 2024 roku.',
    content:
      '<h2>Rozpoczęcie nowego naboru</h2><p>Z radością informujemy, że od 15 stycznia 2024 roku rozpoczyna się nowy nabór wniosków w ramach programu Czyste Powietrze. Program ten umożliwia mieszkańcom województwa zachodniopomorskiego uzyskanie dofinansowania na wymianę starych źródeł ciepła oraz termomodernizację budynków mieszkalnych.</p><h3>Najważniejsze zmiany</h3><ul><li>Zwiększone kwoty dofinansowania do 135 000 zł</li><li>Uproszczone procedury składania wniosków</li><li>Nowe kategorie kwalifikowanych inwestycji</li></ul><p>Szczegółowe informacje dostępne są na stronie programu oraz w naszym biurze obsługi klienta.</p>',
    imageUrl: '/placeholder.svg?height=300&width=400&text=Czyste+Powietrze',
    category: 'Programy dofinansowania',
    tags: ['Czyste Powietrze', 'dofinansowanie', 'nabór'],
    author: 'Anna Kowalska',
    published: true,
    publishedAt: '2024-01-15T10:00:00Z',
    featured: true,
    readTime: '3 min',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Zmiany w regulaminie programu Moja Woda',
    slug: 'zmiany-w-regulaminie-programu-moja-woda',
    excerpt:
      'W związku z nowelizacją przepisów wprowadzamy zmiany w regulaminie programu Moja Woda obowiązujące od 1 lutego 2024.',
    content:
      '<h2>Aktualizacja regulaminu</h2><p>W związku z nowelizacją przepisów dotyczących gospodarki wodnej, wprowadzamy istotne zmiany w regulaminie programu Moja Woda. Zmiany wchodzą w życie z dniem 1 lutego 2024 roku.</p><h3>Główne zmiany</h3><ul><li>Rozszerzenie katalogu kwalifikowanych inwestycji</li><li>Zwiększenie maksymalnej kwoty dofinansowania</li><li>Nowe wymagania dotyczące dokumentacji technicznej</li></ul>',
    imageUrl: '/placeholder.svg?height=300&width=400&text=Moja+Woda',
    category: 'Aktualności prawne',
    tags: ['Moja Woda', 'regulamin', 'zmiany'],
    author: 'Piotr Nowak',
    published: true,
    publishedAt: '2024-01-10T14:30:00Z',
    featured: false,
    readTime: '5 min',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
  },
  {
    id: '3',
    title: 'Konkurs na najlepszy projekt ekologiczny 2024',
    slug: 'konkurs-na-najlepszy-projekt-ekologiczny-2024',
    excerpt:
      'Zapraszamy do udziału w konkursie na najlepszy projekt ekologiczny. Zgłoszenia przyjmujemy do 31 marca 2024 roku.',
    content:
      '<h2>Konkurs ekologiczny</h2><p>Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie ogłasza konkurs na najlepszy projekt ekologiczny realizowany w 2023 roku. Konkurs skierowany jest do wszystkich beneficjentów naszych programów.</p><h3>Kategorie konkursu</h3><ul><li>Najlepszy projekt z zakresu odnawialnych źródeł energii</li><li>Najlepszy projekt edukacji ekologicznej</li><li>Najlepszy projekt ochrony przyrody</li></ul>',
    imageUrl: '/placeholder.svg?height=300&width=400&text=Konkurs+Ekologiczny',
    category: 'Konkursy',
    tags: ['konkurs', 'ekologia', 'projekty'],
    author: 'Maria Wiśniewska',
    published: true,
    publishedAt: '2024-01-08T09:00:00Z',
    featured: false,
    readTime: '4 min',
    createdAt: '2024-01-08T09:00:00Z',
    updatedAt: '2024-01-08T09:00:00Z',
  },
];
export const categories = [
  'Wszystkie',
  'Programy dofinansowania',
  'Aktualności prawne',
  'Konkursy',
  'Informacje',
  'Ogłoszenia',
];

export const FALLBACK_IMAGE = '/placeholder.svg?height=384&width=768&query=article+image';

export interface CarouselState {
  currentSlide: number;
  itemsPerSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}
