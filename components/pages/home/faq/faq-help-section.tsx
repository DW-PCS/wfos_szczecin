import { FAQHelpSectionHeader } from './faq-help-section-header';
import { FAQContactOptions } from './faq-contact-options';
import { ContactOption } from '@/types/faq';

interface FAQHelpSectionProps {
  title?: string;
  subtitle?: string;
  contactOptions?: ContactOption[];
}

export function FAQHelpSection({
  title = 'Nie znalazłeś odpowiedzi na swoje pytanie?',
  subtitle = 'Nasz zespół ekspertów jest gotowy pomóc. Skontaktuj się z nami w dogodny dla Ciebie sposób.',
  contactOptions,
}: FAQHelpSectionProps) {
  return (
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
      <FAQHelpSectionHeader title={title} subtitle={subtitle} />
      <FAQContactOptions contactOptions={contactOptions} />
    </div>
  );
}
