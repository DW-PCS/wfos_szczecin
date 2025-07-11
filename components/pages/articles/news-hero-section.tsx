interface NewsHeroSectionProps {
  title?: string;
  description?: string;
}

export function NewsHeroSection({
  title = 'Aktualności',
  description = 'Bądź na bieżąco z najnowszymi informacjami o programach dofinansowania, zmianach prawnych i inicjatywach ekologicznych',
}: NewsHeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-6">{title}</h1>
          <p className="text-lg sm:text-xl text-black/70 font-light">{description}</p>
        </div>
      </div>
    </section>
  );
}
