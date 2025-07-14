interface ProgramsSectionHeaderProps {
  title?: string;
  description?: string;
  headingId?: string;
}

export function ProgramsSectionHeader({
  title = 'Nasze Programy Dofinansowania',
  description = 'Sprawdź aktualne możliwości dofinansowania projektów ekologicznych. Wybierz program odpowiedni dla Twojego projektu i złóż wniosek online.',
  headingId = 'programs-heading',
}: ProgramsSectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
