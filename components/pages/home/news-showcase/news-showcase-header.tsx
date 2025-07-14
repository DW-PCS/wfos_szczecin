interface NewsShowcaseHeaderProps {
  title?: string;
  subtitle?: string;
  highlightedWord?: string;
}

export function NewsShowcaseHeader({
  title = 'Aktualności &',
  subtitle = 'Bądź na bieżąco z najnowszymi informacjami o programach i wydarzeniach',
  highlightedWord = 'Biuletyn',
}: NewsShowcaseHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        {title} <span className="text-primary-green">{highlightedWord}</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
}
