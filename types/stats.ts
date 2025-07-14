export interface StatsBox {
  id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
  isActive: boolean;
  order: number;
}

export interface StatsSettings {
  title: string;
  subtitle: string;
  backgroundImage?: string
  boxes: StatsBox[];
}

export interface GridConfig {
  classes: string;
  maxWidth: string;
}

export interface StatsData {
  activeBoxes: StatsBox[];
  gridConfig: GridConfig;
}

export interface StatsSectionSettings {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  boxes: StatsBox[];
}
