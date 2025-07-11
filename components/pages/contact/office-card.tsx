import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getContactIcon } from '@/lib/utils/helpers';
import { Mail, Map, MapPin, Phone } from 'lucide-react';

export interface OfficeData {
  type: string;
  name: string;
  icon: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
}

interface OfficeCardProps {
  office: OfficeData;
  variant?: 'default' | 'compact';
}

export function OfficeCard({ office, variant = 'default' }: OfficeCardProps) {
  const IconComponent = getContactIcon(office.icon);
  const isCompact = variant === 'compact';

  return (
    <Card className="bg-white rounded-2xl shadow-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle
          className={`text-primary-green flex items-center ${isCompact ? 'text-lg' : 'text-xl'}`}
        >
          <IconComponent
            className={`mr-2 text-primary-green ${isCompact ? 'w-5 h-5' : 'w-6 h-6'}`}
          />
          {office.type}
        </CardTitle>
        <CardDescription className={`text-slate-700 pt-1 ${isCompact ? 'text-sm' : ''}`}>
          {office.name}
        </CardDescription>
      </CardHeader>

      <CardContent className={`space-y-3 text-slate-600 ${isCompact ? 'text-sm' : 'text-sm'}`}>
        <div className="flex items-start">
          <MapPin
            className={`mr-3 mt-1 text-slate-500 flex-shrink-0 ${
              isCompact ? 'w-4 h-4' : 'w-4 h-4'
            }`}
          />
          <span className={isCompact ? 'text-xs' : ''}>{office.address}</span>
        </div>

        <div className="flex items-center">
          <Phone
            className={`mr-3 text-slate-500 flex-shrink-0 ${isCompact ? 'w-4 h-4' : 'w-4 h-4'}`}
          />
          <a
            href={`tel:${office.phone.replace(/\s|-/g, '')}`}
            className={`hover:text-primary-green hover:underline ${isCompact ? 'text-xs' : ''}`}
          >
            {office.phone}
          </a>
        </div>

        <div className="flex items-center">
          <Mail
            className={`mr-3 text-slate-500 flex-shrink-0 ${isCompact ? 'w-4 h-4' : 'w-4 h-4'}`}
          />
          <a
            href={`mailto:${office.email}`}
            className={`hover:text-primary-green hover:underline break-all ${
              isCompact ? 'text-xs' : ''
            }`}
          >
            {office.email}
          </a>
        </div>

        <div className="pt-2">
          <a
            href={office.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-primary-green hover:underline font-medium ${
              isCompact ? 'text-xs' : 'text-sm'
            }`}
          >
            Zobacz na mapie <Map className={`ml-1.5 ${isCompact ? 'w-3 h-3' : 'w-4 h-4'}`} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
