'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function useProgramsTabs() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('programs');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', value);
    window.history.replaceState({}, '', url.toString());
  };

  return {
    activeTab,
    handleTabChange,
  };
}
