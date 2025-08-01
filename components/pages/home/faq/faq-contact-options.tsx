import { DEFAULT_CONTACT_OPTIONS } from '@/constants/faq';
import { ContactOption } from '@/types/faq';
import { FAQContactCard } from './card/faq-contact-card';

interface FAQContactOptionsProps {
  contactOptions?: ContactOption[];
}

export function FAQContactOptions({
  contactOptions = DEFAULT_CONTACT_OPTIONS,
}: FAQContactOptionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {contactOptions.map((option, index) => (
        <FAQContactCard key={index} option={option} />
      ))}
    </div>
  );
}
