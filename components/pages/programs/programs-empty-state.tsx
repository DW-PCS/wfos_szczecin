interface ProgramsEmptyStateProps {
  message?: string;
}

export function ProgramsEmptyState({
  message = 'Brak aktywnych programów w wybranej kategorii.',
}: ProgramsEmptyStateProps) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}
