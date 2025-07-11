import {
  BarChart3,
  CalendarIcon,
  FolderOpen,
  Globe,
  Home,
  Leaf,
  Puzzle,
  Settings,
  Users,
} from 'lucide-react';

export const dashboardMenuItems = [
  { title: 'Dashboard', icon: BarChart3, id: 'dashboard', href: '/admin' },
  { title: 'Strona główna', icon: Home, id: 'hero', href: '/admin/strona-glowna' },
  { title: 'Strona O nas', icon: Users, id: 'about', href: '/admin/o-nas' },
  { title: 'Strona Kontakt', icon: Users, id: 'contact', href: '/admin/kontakt' },
  { title: 'Programy', icon: Users, id: 'programs', href: '/admin/programy' },
  { title: 'Aktualności', icon: CalendarIcon, id: 'news', href: '/admin/aktualnosci' },
  { title: 'Strony', icon: Globe, id: 'pages', href: '/admin/strony' },
  { title: 'Pliki', icon: FolderOpen, id: 'files', href: '/admin/pliki' },
  { title: 'Komponenty', icon: Puzzle, id: 'components', href: '/admin/komponenty' },
  { title: 'Statystyki', icon: BarChart3, id: 'achievements', href: '/admin/statystyki' },
  { title: 'Korzyści', icon: Leaf, id: 'benefits', href: '/admin/korzysci' },
  { title: 'Ustawienia', icon: Settings, id: 'settings', href: '/admin/ustawienia' },
];
