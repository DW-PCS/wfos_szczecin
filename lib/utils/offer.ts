import { Droplets, Home, Leaf, Shield } from 'lucide-react';

export const getIconForProgram = (programName: string) => {
  const name = programName.toLowerCase();
  if (name.includes('powietrze') || name.includes('ciepł')) return Home;
  if (name.includes('woda') || name.includes('wodna')) return Droplets;
  if (name.includes('strażak') || name.includes('bezpiecz')) return Shield;
  if (name.includes('energia') || name.includes('zielona') || name.includes('słoneczna'))
    return Leaf;
  return Home;
};

export const getStatusDisplay = (status: string | undefined): string => {
  switch (status) {
    case 'otwarty':
      return 'Otwarty';
    case 'planowany':
      return 'Planowany';
    case 'zakończony':
      return 'Zakończony';
    case 'realizacja':
      return 'W realizacji';
    case 'zamknięty':
      return 'Nabór zamknięty';
    default:
      return status ?? 'Nieznany';
  }
};

export const getProgramStatusVariant = (
  status: string
): 'default' | 'secondary' | 'outline' | 'destructive' => {
  switch (status) {
    case 'otwarty':
      return 'default';
    case 'planowany':
      return 'secondary';
    case 'zakończony':
      return 'outline';
    case 'realizacja':
      return 'secondary';
    case 'zamknięty':
      return 'destructive';
    default:
      return 'secondary';
  }
};

export const getStatusColor = (status: string): string => {
  const displayStatus = getStatusDisplay(status);
  switch (displayStatus) {
    case 'Otwarty':
      return 'bg-green-100 text-green-800';
    case 'Planowany':
      return 'bg-yellow-100 text-yellow-800';
    case 'W realizacji':
      return 'bg-blue-100 text-blue-800';
    case 'Nabór zamknięty':
      return 'bg-orange-100 text-orange-800';
    case 'Zakończony':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusLabel = (status: string): string => {
  const displayStatus = getStatusDisplay(status);
  switch (displayStatus) {
    case 'Otwarty':
      return 'Otwarty';
    case 'Planowany':
      return 'Planowany';
    case 'W realizacji':
      return 'W realizacji';
    case 'Nabór zamknięty':
      return 'Nabór zamknięty';
    case 'Zakończony':
      return 'Zakończony';
    default:
      return 'Nieznany';
  }
};
