import { Building, LucideIcon, MapPin, Users } from 'lucide-react';

const CATEGORY_COLORS = {
  'Programy dofinansowania': 'bg-green-100 text-green-800',
  'Aktualności prawne': 'bg-blue-100 text-blue-800',
  Konkursy: 'bg-purple-100 text-purple-800',
  Informacje: 'bg-gray-100 text-gray-800',
  Ogłoszenia: 'bg-orange-100 text-orange-800',
} as const;

export const getCategoryColor = (category: string): string => {
  return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || 'bg-gray-100 text-gray-800';
};

export const getContactIcon = (iconName: string): LucideIcon => {
  const icons: { [key: string]: LucideIcon } = {
    Building,
    MapPin,
    Users,
  };
  return icons[iconName] || Building;
};
