import { Button } from '@/components/ui/button';
import { ADDITIONAL_LINKS } from '@/constants/footer';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface LegalInfoProps {
  className?: string;
}

export const LegalInfo: FC<LegalInfoProps> = ({ className = '' }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={className}>
      <div className="border-t border-gray-600 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej
              w Szczecinie.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Wszelkie prawa zastrzeżone. Strona zgodna z WCAG 2.1 AA.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            {ADDITIONAL_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-primary-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            onClick={scrollToTop}
            className="bg-primary-green/20 cursor-pointer hover:bg-primary-green hover:text-white backdrop-blur-sm border border-primary-green/30 rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 group"
            aria-label="Przewiń do góry"
          >
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
};
