import { SOCIAL_LINKS } from '@/constants/footer';
import { cn } from '@/lib/cn';
import { Leaf } from 'lucide-react';
import Link from 'next/link';

const CompanyInfo = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-lime rounded-2xl flex items-center justify-center shadow-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-blue rounded-full border-2 border-primary-navy" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">WFOŚiGW</h3>
          <p className="text-primary-lime font-medium">Szczecin</p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed text-lg">
        Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie wspiera projekty
        ekologiczne od ponad 30 lat, dbając o zrównoważony rozwój naszego regionu.
      </p>

      <div className="flex space-x-4">
        {SOCIAL_LINKS.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Link
              key={index}
              href={social.href}
              aria-label={social.label}
              className={cn(
                'w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300 hover:text-white',
                social.color
              )}
            >
              <IconComponent className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;
