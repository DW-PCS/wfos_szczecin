import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export function useTabSelection<T extends string>(validTabs: readonly T[], defaultTab: T) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getInitialTab = useCallback((): T => {
    const tabFromUrl = searchParams.get('tab') as T;
    return validTabs.includes(tabFromUrl) ? tabFromUrl : defaultTab;
  }, [searchParams, validTabs, defaultTab]);

  const [activeTab, setActiveTab] = useState<T>(getInitialTab);

  const handleTabChange = useCallback(
    (tab: string) => {
      const typedTab = tab as T;
      setActiveTab(typedTab);

      const params = new URLSearchParams(searchParams);
      params.set('tab', tab);

      const newUrl = params.toString() ? `?${params.toString()}` : '';
      router.replace(newUrl, { scroll: false });
    },
    [router, searchParams]
  );

  useEffect(() => {
    const tabFromUrl = getInitialTab();
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, activeTab, getInitialTab]);

  return {
    activeTab,
    handleTabChange,
  };
}
