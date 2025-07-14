import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProgramsCallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function ProgramsCallToAction({
  title = 'Potrzebujesz pomocy?',
  subtitle = 'Nasz zespół doradców pomoże Ci wybrać odpowiedni program',
  buttonText = 'Skontaktuj się z nami',
  buttonHref = '/kontakt',
}: ProgramsCallToActionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
        <Link href={buttonHref}>
          <Button size="lg">{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
