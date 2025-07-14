'use client';

import { useStatsData } from "@/hooks/use-stats-data";
import { StatsGrid } from "./stats-grid";
import { StatsSectionBackground } from "./stats-section-background";
import { StatsSectionHeader } from "./stats-section-header";
import { defaultSettings } from "@/constants/stats";


export default function StatsSection() {

  const { activeBoxes, gridConfig } = useStatsData(defaultSettings);

  return (
    <section className="py-16 sm:py-20 relative min-h-[600px] flex items-center justify-center bg-gray-100">
      <StatsSectionBackground backgroundImage={defaultSettings.backgroundImage} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StatsSectionHeader title={defaultSettings.title} subtitle={defaultSettings.subtitle} />

        <StatsGrid boxes={activeBoxes} gridConfig={gridConfig} />
      </div>
    </section>
  );
}
