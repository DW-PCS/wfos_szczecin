'use client';

import { usePathname } from 'next/navigation';
import { CompanyInfo, Contact, FastLinks, LegalInfo, LegalLinks } from '../features';

const Footer = () => {
  const pathname = usePathname();
  const isAdminBoard = pathname.startsWith('/admin');

  if (isAdminBoard) {
    return null;
  }
  return (
    <footer className="relative bg-primary-navy text-white overflow-hidden">
      <FooterMask />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <CompanyInfo />
          <FastLinks />
          <LegalLinks />
          <Contact />
        </div>
        <LegalInfo />
      </div>
      <GradientLine />
    </footer>
  );
};

export default Footer;

const FooterMask = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-green/10 via-transparent to-primary-blue/10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-lime/3 rounded-full blur-2xl" />
    </div>
  );
};

const GradientLine = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-primary-lime to-primary-blue" />
  );
};
