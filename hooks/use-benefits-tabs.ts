import { useCallback, useState } from 'react';

interface UseBenefitsTabsReturn {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isTabActive: (tab: string) => boolean;
  switchToTab: (tab: string) => void;
}

export function useBenefitsTabs(defaultTab: string = 'financial'): UseBenefitsTabsReturn {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const isTabActive = useCallback((tab: string) => activeTab === tab, [activeTab]);

  const switchToTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    setActiveTab,
    isTabActive,
    switchToTab,
  };
}
