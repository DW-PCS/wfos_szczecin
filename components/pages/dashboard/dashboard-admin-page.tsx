'use client';

import { useDashboardData } from '@/hooks/use-dashboard-data';
import React from 'react';
import { DashboardStats } from './dashboard-stats';
import { QuickActions } from './quick-actions';
import { QuickOverview } from './quick-overview';
import { RecentActivities } from './recent-activities';

interface DashboardViewProps {
  programs: any[];
  articles: any[];
  activeUsersCount: number;
}

const DashboardView = React.memo(function DashboardView({
  programs,
  articles,
  activeUsersCount,
}: DashboardViewProps) {
  const { stats, recentActivities } = useDashboardData({
    programs,
    articles,
    pages: [],
    activeUsersCount,
  });

  return (
    <div className="space-y-8">
      <DashboardStats
        activeProgramsCount={stats.activeProgramsCount}
        totalProgramsCount={stats.totalProgramsCount}
        publishedNewsCount={stats.publishedNewsCount}
        draftNewsCount={stats.draftNewsCount}
        pagesCount={stats.pagesCount}
        publishedPagesCount={stats.publishedPagesCount}
        activeUsersCount={stats.activeUsersCount}
      />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities activities={recentActivities} />
        <QuickOverview
          activeUsersSystemCount={stats.activeUsersSystemCount}
          draftNewsCount={stats.draftNewsCount}
          unpublishedPagesCount={stats.unpublishedPagesCount}
        />
      </div>
    </div>
  );
});

export default DashboardView;
