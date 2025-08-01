import {
  BarChart3,
  Briefcase,
  Building,
  DollarSign,
  FileText,
  Leaf,
  Megaphone,
  Monitor,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface Achievement {
  id: string;
  number: string;
  label: string;
  icon: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
  title?: string;
  subtitle?: string;
}

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  DollarSign,
  Users,
  Leaf,
  Briefcase,
  FileText,
  Scale,
  Megaphone,
  Monitor,
  Building,
} as const;

const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] ?? BarChart3;
};

export function AchievementsSection({
  achievements,
  title = 'Nasze Osiągnięcia',
  subtitle = 'Przez ponad 30 lat działalności osiągnęliśmy znaczące rezultaty w ochronie środowiska',
}: AchievementsSectionProps) {
  return (
    <section className="mb-24">
      <header className="text-center mb-12">
        <h3 className="text-3xl font-bold text-primary-navy mb-4">{title}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = getIconComponent(achievement.icon);

          return (
            <article
              key={achievement.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-green/20 transition-all duration-300 text-center"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out both',
              }}
            >
              <div className="w-12 h-12 bg-primary-green rounded-xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-navy mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
