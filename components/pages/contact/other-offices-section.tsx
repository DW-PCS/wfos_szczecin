import { OfficeCard, type OfficeData } from './office-card';

interface OtherOfficesSectionProps {
  offices: OfficeData[];
  title?: string;
  subtitle?: string;
}

export function OtherOfficesSection({
  offices,
  title = 'Pozostałe Biura',
  subtitle = 'Nasze biura terenowe i punkty obsługi',
}: OtherOfficesSectionProps) {
  return (
    <div className="space-y-8 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map(office => (
          <OfficeCard key={office.name} office={office} variant="compact" />
        ))}
      </div>
    </div>
  );
}
