import { defaultFiles } from '@/constants/files';
import { Article } from '@/types/news';
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

export const getFilesByCategory = (categoryId: string) => {
  return defaultFiles.filter(file => file.categoryId === categoryId);
};

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export const isFormValid = (content: string, newsData: Partial<Article>) => {
  const contentText = stripHtml(content).trim();
  return newsData.title?.trim() !== '' && newsData.excerpt?.trim() !== '' && contentText !== '';
};

export   const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};
