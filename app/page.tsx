import HeroSection from '@/components/pages/home/hero-section';
import ProgramsSection from '@/components/pages/home/programs/programs-section';

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

      </section>
    </main>
  );
};

export default page;
