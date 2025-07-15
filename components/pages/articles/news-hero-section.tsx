interface NewsHeroSectionProps {
  title?: string;
  description?: string;
}

export function NewsHeroSection({
  title = 'Aktualności',
  description = 'Bądź na bieżąco z najnowszymi informacjami o programach dofinansowania, zmianach prawnych i inicjatywach ekologicznych',
}: NewsHeroSectionProps) {
  return (
    <section className="bg-primary-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-white/80">{description}</p>
        </div>
      </div>
    </section>
  );
}
