import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface HeroTitleFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function HeroTitleField({ value, onChange }: HeroTitleFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="hero-title">Tytuł główny</Label>
      <Textarea
        id="hero-title"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Wprowadź tytuł główny (możesz używać HTML)"
        rows={3}
      />
      <p className="text-sm text-gray-500">
        Możesz używać HTML, np. &lt;span class="text-primary-green"&gt;tekst&lt;/span&gt; dla
        kolorowego tekstu
      </p>
    </div>
  );
}
