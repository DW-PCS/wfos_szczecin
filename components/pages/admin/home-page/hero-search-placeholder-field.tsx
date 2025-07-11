import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface HeroSearchPlaceholderFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function HeroSearchPlaceholderField({ value, onChange }: HeroSearchPlaceholderFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="search-placeholder">Tekst wyszukiwarki</Label>
      <Input
        id="search-placeholder"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Tekst placeholder dla wyszukiwarki programów"
      />
    </div>
  );
}
