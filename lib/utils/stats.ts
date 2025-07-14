import { GridConfig, StatsBox } from "@/types/stats";

export const getActiveBoxes = (boxes: StatsBox[]): StatsBox[] => {
  return boxes.filter(box => box.isActive).sort((a, b) => a.order - b.order);
};

export const getGridConfig = (boxCount: number): GridConfig => {
  const configs = {
    1: {
      classes: 'grid-cols-1 max-w-2xl',
      maxWidth: 'max-w-2xl',
    },
    2: {
      classes: 'grid-cols-1 md:grid-cols-2',
      maxWidth: 'max-w-4xl',
    },
    3: {
      classes: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      maxWidth: 'max-w-4xl',
    },
    4: {
      classes: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4',
      maxWidth: 'max-w-4xl',
    },
  };

  return configs[boxCount as keyof typeof configs] || configs[4];
};

export const validateStatsBox = (box: StatsBox): boolean => {
  return !!(
    box.title?.trim() &&
    box.description?.trim() &&
    box.icon &&
    box.backgroundColor &&
    box.iconColor
  );
};

export const sortBoxesByOrder = (boxes: StatsBox[]): StatsBox[] => {
  return [...boxes].sort((a, b) => a.order - b.order);
};

export const getBoxById = (boxes: StatsBox[], id: string): StatsBox | undefined => {
  return boxes.find(box => box.id === id);
};
