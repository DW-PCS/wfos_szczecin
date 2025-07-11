'use client';

import { ContactForm } from './contact-form';

interface ContactHeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function ContactHeroSection({
  title = 'Skontaktuj się z nami',
  description = 'Masz pytania lub potrzebujesz wsparcia? Jesteśmy tutaj, aby pomóc. Wybierz preferowaną formę kontaktu.',
  buttonText = 'Dane kontaktowe',
}: ContactHeroSectionProps) {
  const scrollToOffices = () => {
    const element = document.getElementById('office-locations');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pt-4 pb-16 sm:pt-8 sm:pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">{description}</p>
            <button
              onClick={scrollToOffices}
              className="inline-flex items-center px-6 py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors duration-300"
            >
              {buttonText}
            </button>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
