import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ProgramPageType } from '@/types/program';

interface HomepageDisplayFormProps {
  formData: Partial<ProgramPageType>;
  onUpdate: <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => void;
}

export const HomepageDisplayForm = ({ formData, onUpdate }: HomepageDisplayFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wyświetlanie</CardTitle>
        <CardDescription>Opcje wyświetlania programu</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="showOnHomepage"
            checked={formData.showOnHomepage || false}
            onCheckedChange={checked => onUpdate('showOnHomepage', checked as boolean)}
          />
          <Label htmlFor="showOnHomepage" className="text-sm font-normal leading-relaxed">
            Pokaż na stronie głównej
          </Label>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Program będzie wyświetlany w wyróżnionej sekcji na stronie głównej
        </p>
      </CardContent>
    </Card>
  );
};
