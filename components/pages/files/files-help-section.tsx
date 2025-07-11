import { Button } from '@/components/ui/button';

interface FilesHelpSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  contactLink?: string;
}

export function FilesHelpSection({
  title = 'Potrzebujesz pomocy?',
  description = 'Jeśli nie możesz znaleźć potrzebnego dokumentu lub masz pytania dotyczące plików, skontaktuj się z nami.',
  buttonText = 'Skontaktuj się z nami',
  contactLink = '/kontakt',
}: FilesHelpSectionProps) {
  return (
    <div className="bg-gradient-to-r from-primary-blue/5 to-primary-green/5 rounded-2xl border border-primary-green/20 p-8 mt-12">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary-navy mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button
          className="bg-primary-green hover:bg-primary-lime text-white rounded-xl px-8 py-3 font-semibold"
          asChild
        >
          <a href={contactLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
}
