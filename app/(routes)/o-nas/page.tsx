'use client';

import {
  CtaSection,
  HeroSection,
  IntroSection,
  MissionVisionSection,
  OrganizationStructureSection,
  TeamsSection,
} from '@/components/pages/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-blue/8 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-lime/5 rounded-full blur-3xl animate-pulse delay-500" />

          <div className="container mx-auto px-4 relative z-10">
            <IntroSection />
            <MissionVisionSection />
            {/* <AchievementsSection achievements={achievements} /> */}
            <OrganizationStructureSection />
            <TeamsSection />
            <CtaSection />
          </div>
        </section>
      </main>
    </div>
  );
}
