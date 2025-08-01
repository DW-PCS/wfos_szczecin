import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SaveButton } from '../save-button';

interface StatsSectionCardProps {
  handleSaveContent: () => void;
}

export function StatsSectionCard({ handleSaveContent }: StatsSectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sekcja &ldquo;Ochrona Środowiska w Praktyce&rdquo;</CardTitle>
        <CardDescription>
          Zarządzaj tytułem, opisem, obrazem tła i boxami w sekcji statystyk
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          Ta sekcja będzie zawierać zarządzanie statystykami i boxami informacyjnymi. Implementacja
          będzie dodana w następnej iteracji.
        </p>

        <SaveButton onClick={handleSaveContent} text="Zapisz ustawienia sekcji" />
      </CardContent>
    </Card>
  );
}
