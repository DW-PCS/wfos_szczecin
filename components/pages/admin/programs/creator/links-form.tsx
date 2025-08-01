import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { initialProgramPages } from '@/constants/program';
import { ProgramPageType } from '@/types/program';

interface LinksFormProps {
  formData: Partial<ProgramPageType>;
  onUpdate: <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => void;
}

const getProgramPages = () => {
  return initialProgramPages.filter(page => page.type === 'program');
};

export const LinksForm = ({ formData, onUpdate }: LinksFormProps) => {
  const availableProgramPages = getProgramPages().map(page => ({
    id: page.id,
    title: page.name,
    slug: page.slug || page.name.toLowerCase().replace(/\s+/g, '-'),
  }));

  const handleProgramLinkChange = (value: string) => {
    onUpdate('programLink', value);
    if (value.trim()) {
      onUpdate('linkedPageSlug', '');
    }
  };

  const handleLinkedPageSlugChange = (value: string) => {
    const actualValue = value === '__none__' ? '' : value;
    onUpdate('linkedPageSlug', actualValue);
    if (actualValue) {
      onUpdate('programLink', '');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Linki i strony</CardTitle>
        <CardDescription>
          Powiązania z zewnętrznymi stronami i wewnętrznymi podstronami
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="programLink">Link do strony zewnętrznej</Label>
            <Input
              id="programLink"
              value={formData.programLink || ''}
              onChange={e => handleProgramLinkChange(e.target.value)}
              placeholder="https://czystepowietrze.gov.pl"
              disabled={!!formData.linkedPageSlug}
            />
            {formData.linkedPageSlug && (
              <p className="text-xs text-gray-500">Wyłączone - wybrano stronę wewnętrzną</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedPageSlug">Podlinkowana strona wewnętrzna</Label>
            <Select
              value={formData.linkedPageSlug || '__none__'}
              onValueChange={handleLinkedPageSlugChange}
              disabled={!!formData.programLink}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wybierz stronę programu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__none__">Brak (usuń powiązanie)</SelectItem>
                {availableProgramPages.map(page => (
                  <SelectItem key={page.id} value={page.slug}>
                    {page.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.programLink && (
              <p className="text-xs text-gray-500">Wyłączone - wpisano link zewnętrzny</p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <strong>Uwaga:</strong> Można wybrać tylko jeden rodzaj linku - albo zewnętrzny, albo
            wewnętrzną stronę programu. Wybór jednego automatycznie wyczyści drugie pole.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
