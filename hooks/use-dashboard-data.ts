'use client';

import { useMemo } from 'react';

interface Activity {
  id: string;
  type: 'program' | 'news' | 'page';
  message: string;
  timestamp: Date;
  color: 'green' | 'blue' | 'purple';
}

interface DashboardData {
  programs: any[];
  articles: any[];
  pages: any[];
  activeUsersCount: number;
}

const generateRecentActivities = (programs: any[], news: any[], pages: any[]): Activity[] => {
  const activities: Activity[] = [];

  const recentPrograms = programs.slice(0, 2);
  recentPrograms.forEach((program, index) => {
    const daysAgo = (index + 1) * 2; // 2, 4 dni temu
    activities.push({
      id: `program-${program.id}`,
      type: 'program',
      message: `Dodano nowy program "${program.name}"`,
      timestamp: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
      color: 'green',
    });
  });

  // Dodaj ostatnie aktualności
  const recentNews = news.filter(n => n.published).slice(0, 2);
  recentNews.forEach(article => {
    activities.push({
      id: `news-${article.id}`,
      type: 'news',
      message: `Opublikowano artykuł "${article.title}"`,
      timestamp: new Date(article.createdAt),
      color: 'blue',
    });
  });

  // Dodaj ostatnie strony
  const recentPages = pages.filter(p => p.published).slice(0, 1);
  recentPages.forEach(page => {
    activities.push({
      id: `page-${page.id}`,
      type: 'page',
      message: `Zaktualizowano stronę "${page.title}"`,
      timestamp: new Date(page.createdAt),
      color: 'purple',
    });
  });

  // Sortuj po dacie (najnowsze pierwsze) i zwróć maksymalnie 4
  return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 4);
};

export function useDashboardData({ programs, articles, pages, activeUsersCount }: DashboardData) {
  // Mock data dla użytkowników systemu - w prawdziwej aplikacji to by pochodziło z API/store
  const mockUsers = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Kowalski',
      status: 'active',
      lastLogin: '2024-01-15T14:30:00Z',
    },
    {
      id: 2,
      firstName: 'Anna',
      lastName: 'Nowak',
      status: 'active',
      lastLogin: '2024-01-14T09:15:00Z',
    },
    {
      id: 3,
      firstName: 'Piotr',
      lastName: 'Wiśniewski',
      status: 'inactive',
      lastLogin: '2024-01-10T16:45:00Z',
    },
  ];

  // Mock data dla stron - w prawdziwej aplikacji to by pochodziło z API/store
  const mockPages = [
    { id: '1', title: 'Strona główna', published: true, createdAt: '2024-01-10T08:00:00Z' },
    { id: '2', title: 'O nas', published: true, createdAt: '2024-01-09T12:30:00Z' },
    { id: '3', title: 'Kontakt', published: true, createdAt: '2024-01-08T15:45:00Z' },
    {
      id: '4',
      title: 'Regulamin programu Czyste Powietrze',
      published: false,
      createdAt: '2024-01-07T10:15:00Z',
    },
    {
      id: '5',
      title: 'FAQ - Często zadawane pytania',
      published: true,
      createdAt: '2024-01-06T14:20:00Z',
    },
  ];

  const stats = useMemo(() => {
    const activeProgramsCount = programs.filter(p => p.status === 'otwarty').length;
    const publishedNewsCount = articles.filter(article => article.published).length;
    const pagesCount = mockPages.length;
    const publishedPagesCount = mockPages.filter(p => p.published).length;
    const activeUsersSystemCount = mockUsers.filter(u => u.status === 'active').length;
    const draftNewsCount = articles.filter(article => !article.published).length;
    const unpublishedPagesCount = mockPages.filter(p => !p.published).length;

    return {
      activeProgramsCount,
      totalProgramsCount: programs.length,
      publishedNewsCount,
      draftNewsCount,
      pagesCount,
      publishedPagesCount,
      activeUsersSystemCount,
      unpublishedPagesCount,
      activeUsersCount,
    };
  }, [programs, articles, activeUsersCount]);

  const recentActivities = useMemo(
    () => generateRecentActivities(programs, articles, mockPages),
    [programs, articles]
  );

  return {
    stats,
    recentActivities,
  };
}
