'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Activity {
  id: string;
  type: 'program' | 'news' | 'page';
  message: string;
  timestamp: Date;
  color: 'green' | 'blue' | 'purple';
}

interface RecentActivitiesProps {
  activities: Activity[];
}

// Funkcja do formatowania czasu względnego - teraz bezpieczna dla SSR
const getRelativeTime = (date: Date, currentTime: Date) => {
  const diffInHours = Math.floor((currentTime.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) return 'Przed chwilą';
  if (diffInHours < 24) return `${diffInHours} ${diffInHours === 1 ? 'godzinę' : 'godzin'} temu`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} ${diffInDays === 1 ? 'dzień' : 'dni'} temu`;

  return date.toLocaleDateString('pl-PL');
};

export function RecentActivities({ activities }: RecentActivitiesProps) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60 sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </div>
          Ostatnie aktywności
        </CardTitle>
        <CardDescription>Przegląd najnowszych zmian w systemie</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map(activity => (
              <div
                key={activity.id}
                className={`flex items-start space-x-4 p-3 rounded-lg bg-${activity.color}-50 border border-${activity.color}-200`}
              >
                <div className={`w-2 h-2 bg-${activity.color}-500 rounded-full mt-2`}></div>
                <div className="flex-1">
                  <p className={`text-sm font-medium text-${activity.color}-900`}>
                    {activity.message}
                  </p>
                  <p className={`text-xs text-${activity.color}-600`}>
                    {isClient && currentTime
                      ? getRelativeTime(activity.timestamp, currentTime)
                      : activity.timestamp.toLocaleDateString('pl-PL')}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              <p className="text-sm">Brak ostatnich aktywności</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
