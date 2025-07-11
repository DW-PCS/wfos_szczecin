import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CtaAction {
  text: string;
  href: string;
  variant?: 'default' | 'outline';
}

interface CtaSectionProps {
  title?: string;
  description?: string;
  actions?: CtaAction[];
}

const defaultActions: CtaAction[] = [
  {
    text: 'Skontaktuj się z nami',
    href: '/kontakt',
    variant: 'default',
  },
  {
    text: 'Sprawdź oferty pracy',
    href: '/kariera',
    variant: 'outline',
  },
];

export function CtaSection({
  title = 'Dołącz do nas',
  description = 'Jesteś zainteresowany współpracą lub chcesz dowiedzieć się więcej o naszych programach? Skontaktuj się z nami!',
  actions = defaultActions,
}: CtaSectionProps) {
  return (
    <div className="bg-gradient-to-r from-primary-green/10 to-primary-lime/10 rounded-3xl p-12 border border-primary-green/20 text-center">
      <h3 className="text-3xl font-bold text-primary-navy mb-4">{title}</h3>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">{description}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className={
              action.variant === 'outline'
                ? 'border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300'
                : 'bg-primary-green hover:bg-primary-lime text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
            }
            asChild
          >
            <Link href={action.href}>{action.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
