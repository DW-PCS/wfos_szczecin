import { HelpCircle } from 'lucide-react';

export const EmptyState = () => {
  return (
    <div className="text-center py-8 text-gray-500">
      <HelpCircle className="h-12 w-12 mx-auto mb-2 text-gray-400" />
      <p>Brak wybranych komponentów</p>
      <p className="text-sm">Dodaj komponenty, które będą wyświetlane pod treścią strony</p>
    </div>
  );
};
