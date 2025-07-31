'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Globe, Users } from 'lucide-react';

interface QuickOverviewProps {
  activeUsersSystemCount: number;
  draftNewsCount: number;
  unpublishedPagesCount: number;
}

export function QuickOverview({
  activeUsersSystemCount,
  draftNewsCount,
  unpublishedPagesCount,
}: QuickOverviewProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <Users className="h-4 w-4 text-green-600" />
          </div>
          Szybki przegląd
        </CardTitle>
        <CardDescription>Kluczowe informacje o systemie</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Aktywni użytkownicy systemu</span>
            </div>
            <span className="text-lg font-bold text-blue-600">{activeUsersSystemCount}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CalendarIcon className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">Szkice aktualności</span>
            </div>
            <span className="text-lg font-bold text-green-600">{draftNewsCount}</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-purple-600" />
              </div>
              <span className="text-sm font-medium">Nieopublikowane strony</span>
            </div>
            <span className="text-lg font-bold text-purple-600">{unpublishedPagesCount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
