import { HeroSection, NewsShowcase, ProgramsSection, StatsSection } from '@/components/pages/home';
import BenefitsSection from '@/components/pages/home/befefits/benefits-section';
import FAQSection from '@/components/pages/home/faq/faq-section';

const page = () => {
  return (
    <main id="main-content" role="main" aria-label="Treść główna strony">
      <section aria-label="Sekcja powitalna">
        <HeroSection />
      </section>
      <section aria-label="Programy dofinansowania">
        <ProgramsSection />
      </section>
      <section aria-label="Aktualności i informacje">
        <NewsShowcase />
      </section>
      <section aria-label="Statystyki funduszu">
        <StatsSection />
      </section>
      <section aria-label="Korzyści z programów">
        <BenefitsSection />
      </section>
      <section aria-label="Najczęściej zadawane pytania">
        <FAQSection />
      </section>
    </main>
  );
};

export default page;
