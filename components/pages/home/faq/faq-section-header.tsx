import { HelpCircle } from 'lucide-react';

interface FAQSectionHeaderProps {
  title?: string;
  subtitle?: string;
  icon?: React.ComponentType<any>;
}

export function FAQSectionHeader({
  title = 'Często zadawane pytania',
  subtitle = 'Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych programów i procedur. Nie znalazłeś odpowiedzi? Skontaktuj się z nami.',
  icon: Icon = HelpCircle,
}: FAQSectionHeaderProps) {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-2xl mb-6">
        <Icon className="w-8 h-8 text-primary-green" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
        {title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
}
