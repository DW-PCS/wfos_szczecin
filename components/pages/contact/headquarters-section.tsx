import { OfficeCard, type OfficeData } from './office-card';

interface HeadquartersSectionProps {
  office: OfficeData;
  title?: string;
  subtitle?: string;
}

export function HeadquartersSection({
  office,
  title = 'Siedziba Główna',
  subtitle = 'Nasze główne biuro w Szczecinie',
}: HeadquartersSectionProps) {
  return (
    <div id="office-locations" className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <OfficeCard office={office} />
      </div>
    </div>
  );
}
