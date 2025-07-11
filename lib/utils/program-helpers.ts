export const getStatusDisplay = (status: string): string => {
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
      return status;
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
