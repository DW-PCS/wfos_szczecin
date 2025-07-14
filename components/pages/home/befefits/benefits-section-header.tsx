interface BenefitsSectionHeaderProps {
  title?: string;
  subtitle?: string;
}

export function BenefitsSectionHeader({
  title = 'Dlaczego warto z nami współpracować?',
  subtitle = 'Oferujemy szereg korzyści finansowych, organizacyjnych i środowiskowych dla naszych beneficjentów',
}: BenefitsSectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
}
