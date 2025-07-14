import { getActiveBoxes, getGridConfig } from '@/lib/utils/stats';
import { StatsData, StatsSettings } from '@/types/stats';
import { useMemo } from 'react';


export function useStatsData(settings: StatsSettings): StatsData {
  const activeBoxes = useMemo(() => getActiveBoxes(settings.boxes), [settings.boxes]);

  const gridConfig = useMemo(() => getGridConfig(activeBoxes.length), [activeBoxes.length]);

  return {
    activeBoxes,
    gridConfig,
  };
}
