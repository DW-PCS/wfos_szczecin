import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  backgroundImage?: string;
  alt?: string;
}

export function HeroSection({
  title = 'O nas',
  backgroundImage = '/placeholder.svg?height=350&width=1200',
  alt = 'Hero background',
}: HeroSectionProps) {
  return (
    <section className="relative h-[350px] overflow-hidden">
      <Image src={backgroundImage} alt={alt} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">{title}</h1>
      </div>
    </section>
  );
}
