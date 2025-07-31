'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CalendarIcon, Globe, Activity, Eye } from 'lucide-react';

interface DashboardStatsProps {
  activeProgramsCount: number;
  totalProgramsCount: number;
  publishedNewsCount: number;
  draftNewsCount: number;
  pagesCount: number;
  publishedPagesCount: number;
  activeUsersCount: number;
}

export function DashboardStats({
  activeProgramsCount,
  totalProgramsCount,
  publishedNewsCount,
  draftNewsCount,
  pagesCount,
  publishedPagesCount,
  activeUsersCount,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Aktywne programy</CardTitle>
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{activeProgramsCount}</div>
          <p className="text-xs text-gray-500 mt-1">z {totalProgramsCount} wszystkich programów</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Opublikowane aktualności
          </CardTitle>
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <CalendarIcon className="h-4 w-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{publishedNewsCount}</div>
          <p className="text-xs text-gray-500 mt-1">{draftNewsCount} szkiców do publikacji</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Strony</CardTitle>
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <Globe className="h-4 w-4 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900">{pagesCount}</div>
          <p className="text-xs text-gray-500 mt-1">{publishedPagesCount} opublikowanych</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Użytkownicy online</CardTitle>
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <Activity className="h-4 w-4 text-orange-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900 flex items-center">
            {activeUsersCount}
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-green-600 flex items-center mt-1">
            <Eye className="h-3 w-3 mr-1" />
            Aktywni teraz na stronie
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
