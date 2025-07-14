import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ContactPageHero } from '@/types/admin/admin-contact';

interface HeroTabFormProps {
  hero: ContactPageHero;
  onUpdate: (hero: ContactPageHero) => void;
  isEditing: boolean;
}

export function HeroTabForm({ hero, onUpdate, isEditing }: HeroTabFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="hero-title">Tytuł</Label>
        <Input
          id="hero-title"
          value={hero.title}
          onChange={e => onUpdate({ ...hero, title: e.target.value })}
          disabled={!isEditing}
          placeholder="Tytuł sekcji hero"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hero-description">Opis</Label>
        <Textarea
          id="hero-description"
          value={hero.description}
          onChange={e => onUpdate({ ...hero, description: e.target.value })}
          disabled={!isEditing}
          placeholder="Opis w sekcji hero"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hero-button">Tekst przycisku</Label>
        <Input
          id="hero-button"
          value={hero.buttonText}
          onChange={e => onUpdate({ ...hero, buttonText: e.target.value })}
          disabled={!isEditing}
          placeholder="Tekst przycisku"
        />
      </div>
    </div>
  );
}
