import { HomeTabValue } from '@/types/admin/admin-homepage';

export const VALID_TABS: readonly HomeTabValue[] = [
  'content',
  'slider',
  'slider-settings',
  'stats-section',
  'popup',
] as const;

export const DEFAULT_TAB: HomeTabValue = 'content';
