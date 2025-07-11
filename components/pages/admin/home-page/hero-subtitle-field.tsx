import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface HeroSubtitleFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function HeroSubtitleField({ value, onChange }: HeroSubtitleFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="hero-subtitle">Podtytuł</Label>
      <Textarea
        id="hero-subtitle"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Wprowadź opis/podtytuł"
        rows={4}
      />
    </div>
  );
}
