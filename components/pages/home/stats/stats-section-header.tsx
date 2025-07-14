interface StatsSectionHeaderProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function StatsSectionHeader({
  title,
  subtitle,
  titleClassName = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2',
  subtitleClassName = 'text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-2',
}: StatsSectionHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className={titleClassName}>{title}</h2>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
  );
}
