interface HeroSectionProps {
  title?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title = 'O nas',
  backgroundImage = '/placeholder.svg?height=350&width=1200',
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[350px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">{title}</h1>
      </div>
    </section>
  );
}
