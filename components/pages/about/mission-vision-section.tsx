interface MissionVisionItem {
  type: 'mission' | 'vision';
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  hoverBorderColor: string;
  hoverTextColor: string;
}

interface MissionVisionSectionProps {
  items?: MissionVisionItem[];
}

const defaultItems: MissionVisionItem[] = [
  {
    type: 'mission',
    title: 'Nasza Misja',
    description:
      'Wspieramy rozwój zrównoważony województwa zachodniopomorskiego poprzez finansowanie projektów ekologicznych, które poprawiają jakość środowiska i życia mieszkańców.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    gradientFrom: 'from-primary-green',
    gradientTo: 'to-primary-lime',
    hoverBorderColor: 'hover:border-primary-green/30',
    hoverTextColor: 'group-hover:text-primary-green',
  },
  {
    type: 'vision',
    title: 'Nasza Wizja',
    description:
      'Być liderem w finansowaniu projektów ekologicznych, tworząc czyste i zdrowe środowisko dla przyszłych pokoleń w regionie zachodniopomorskim.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    gradientFrom: 'from-primary-blue',
    gradientTo: 'to-primary-navy',
    hoverBorderColor: 'hover:border-primary-blue/30',
    hoverTextColor: 'group-hover:text-primary-blue',
  },
];

export function MissionVisionSection({ items = defaultItems }: MissionVisionSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
      {items.map((item) => (
        <div
          key={item.type}
          className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl ${item.hoverBorderColor} transition-all duration-500 transform hover:scale-105`}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          >
            {item.icon}
          </div>
          <h3
            className={`text-2xl font-bold text-primary-navy mb-4 ${item.hoverTextColor} transition-colors duration-300`}
          >
            {item.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
