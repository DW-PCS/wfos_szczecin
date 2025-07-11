import {
  ContactHeroSection,
  ContactMapSection,
  HeadquartersSection,
  OtherOfficesSection,
} from '@/components/pages/contact';
import { headquarters, officeLocations } from '@/constants/contact';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-slate-800">
      <ContactHeroSection />
      <ContactMapSection office={headquarters} />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <HeadquartersSection office={headquarters} />
        <OtherOfficesSection offices={officeLocations} />
      </main>
    </div>
  );
}
