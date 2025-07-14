import { ProgramPageType } from '@/types/program';
import { ProgramStat } from './program-stat';

interface ProgramStatsProps {
  program: ProgramPageType;
}

export function ProgramStats({ program }: ProgramStatsProps) {
  const stats = [
    {
      value: program.maxSupport,
      label: 'Maksymalne dofinansowanie',
      color: 'text-primary-green',
    },
    {
      value: program.funding,
      label: 'Poziom dofinansowania',
      color: 'text-primary-navy',
    },
    {
      value: program.deadline,
      label: 'Termin naboru',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <ProgramStat
          key={index}
          value={stat.value ?? ''}
          label={stat.label ?? ''}
          color={stat.color ?? ''}
        />
      ))}
    </div>
  );
}
