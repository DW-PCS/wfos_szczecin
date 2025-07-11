import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IntroSectionProps {
  yearsOfExperience?: number;
  mainTitle?: string;
  highlightedWord?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function IntroSection({
  yearsOfExperience = 30,
  mainTitle = 'WFOŚiGW –',
  highlightedWord = 'SKUTECZNIE',
  description = 'Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie od ponad 30 lat wspiera projekty ekologiczne, współfinansując działania samorządów, szpitali, szkół, uczelni wyższych, organizacji pozarządowych, przedsiębiorców oraz wszystkich mieszkańców województwa Zachodniopomorskiego.',
  ctaText = 'Zobacz nasze programy',
  ctaLink = '/programy',
}: IntroSectionProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-green/10 to-primary-lime/10 rounded-full px-6 py-3 border border-primary-green/20 shadow-lg mb-6">
        <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-primary-green">
          {yearsOfExperience}+ lat doświadczenia w ekologii
        </span>
        <div className="w-2 h-2 bg-primary-lime rounded-full animate-pulse delay-300" />
      </div>

      <h2 className="text-4xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
        {mainTitle}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-lime">
          {highlightedWord}
        </span>
      </h2>

      <p className="text-xl text-gray-700 leading-relaxed mb-8">{description}</p>

      <Button
        size="lg"
        className="bg-gradient-to-r from-primary-green to-primary-lime hover:from-primary-lime hover:to-primary-green text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        asChild
      >
        <Link href={ctaLink}>
          <span className="flex items-center">
            {ctaText}
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
      </Button>
    </div>
  );
}
