interface ProgramsPageHeroProps {
  title?: string;
  subtitle?: string;
}

export function ProgramsPageHero({
  title = 'Programy Dofinansowania',
  subtitle = 'Znajdź program dopasowany do Twoich potrzeb i rozpocznij realizację ekologicznych projektów',
}: ProgramsPageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
