import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProgramPageType } from '@/types/program';

interface FinancialDetailsFormProps {
  formData: Partial<ProgramPageType>;
  onUpdate: <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => void;
}

export const FinancialDetailsForm = ({ formData, onUpdate }: FinancialDetailsFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Szczegóły finansowe</CardTitle>
        <CardDescription>Informacje o dofinansowaniu i wsparciu</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maxSupport">Maksymalne wsparcie</Label>
            <Input
              id="maxSupport"
              value={formData.maxSupport}
              onChange={e => onUpdate('maxSupport', e.target.value)}
              placeholder="np. do 135 000 zł"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="funding">Poziom dofinansowania</Label>
            <Input
              id="funding"
              value={formData.funding}
              onChange={e => onUpdate('funding', e.target.value)}
              placeholder="np. do 100%"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deadline">Termin naboru</Label>
          <Input
            id="deadline"
            value={formData.deadline}
            onChange={e => onUpdate('deadline', e.target.value)}
            placeholder="np. 31.12.2024"
          />
        </div>
      </CardContent>
    </Card>
  );
};
