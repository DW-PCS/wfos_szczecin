import { HeroSection, NewsShowcase, ProgramsSection, StatsSection } from '@/components/pages/home';

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
    </main>
  );
};

export default page;
