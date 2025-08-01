import {
  Briefcase,
  Building,
  FileText,
  Megaphone,
  Monitor,
  Scale,
  type LucideIcon,
} from 'lucide-react';

interface Team {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface TeamsSectionProps {
  title?: string;
  subtitle?: string;
  teams?: Team[];
}

const defaultTeams: Team[] = [
  {
    name: 'Zespół Finansowy',
    description: 'Odpowiada za zarządzanie finansami funduszu i rozliczanie projektów.',
    icon: Briefcase,
  },
  {
    name: 'Zespół Projektowy',
    description: 'Zajmuje się oceną i monitorowaniem realizacji projektów ekologicznych.',
    icon: FileText,
  },
  {
    name: 'Zespół Prawny',
    description: 'Zapewnia obsługę prawną i zgodność działań z obowiązującymi przepisami.',
    icon: Scale,
  },
  {
    name: 'Zespół Komunikacji',
    description: 'Odpowiada za komunikację zewnętrzną i promocję działań funduszu.',
    icon: Megaphone,
  },
  {
    name: 'Zespół IT',
    description: 'Zapewnia wsparcie technologiczne i rozwój systemów informatycznych.',
    icon: Monitor,
  },
  {
    name: 'Zespół Administracyjny',
    description: 'Odpowiada za sprawne funkcjonowanie biura i obsługę administracyjną.',
    icon: Building,
  },
];

export function TeamsSection({
  title = 'Nasze Zespoły',
  subtitle = 'Poznaj zespoły specjalistów, którzy każdego dnia pracują nad realizacją projektów ekologicznych',
  teams = defaultTeams,
}: TeamsSectionProps) {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-primary-navy mb-4">{title}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => {
          const IconComponent = team.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-green/20 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out both',
              }}
            >
              <div className="w-12 h-12 bg-primary-green rounded-xl flex items-center justify-center mb-4">
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-navy mb-2">{team.name}</h4>
              <p className="text-gray-600">{team.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
