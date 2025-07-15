export const BENEFICIARY_CATEGORIES = [
  'Osoba fizyczna',
  'Przedsiębiorca',
  'Jednostka samorządu terytorialnego',
  'Państwowe jednostki budżetowe',
  'Pozostałe podmioty i organizacje',
] as const;

export const STATUS_OPTIONS = [
  { value: 'otwarty', label: 'Otwarty', color: 'bg-green-100 text-green-800' },
  { value: 'planowany', label: 'Planowany', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'zakończony', label: 'Zakończony', color: 'bg-gray-100 text-gray-800' },
  { value: 'realizacja', label: 'W realizacji', color: 'bg-blue-100 text-blue-800' },
  { value: 'zamknięty', label: 'Nabór zamknięty', color: 'bg-orange-100 text-orange-800' },
] as const;
