'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Users, Globe, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function QuickActions() {
  const router = useRouter();

  const handleCreateNews = () => {
    console.log('Navigating to create new news article');
    router.push('/admin/aktualnosci/nowy');
  };

  const handleCreateProgram = () => {
    console.log('Navigating to create new program');
    router.push('/admin/programy/nowy');
  };

  const handleCreatePage = () => {
    console.log('Navigating to create new page');
    router.push('/admin/programy/strony/nowa');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Szybkie akcje</h2>
          <p className="text-gray-600">Najczęściej używane funkcje</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
          onClick={handleCreateNews}
        >
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-lg font-semibold text-blue-900">Nowy artykuł</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-blue-700 mb-4">Utwórz nową aktualność lub artykuł</p>
            <div className="flex items-center justify-center text-blue-600">
              <Plus className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Dodaj teraz</span>
            </div>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200"
          onClick={handleCreateProgram}
        >
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-lg font-semibold text-green-900">Nowy program</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-green-700 mb-4">Dodaj nowy program dofinansowania</p>
            <div className="flex items-center justify-center text-green-600">
              <Plus className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Dodaj teraz</span>
            </div>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
          onClick={handleCreatePage}
        >
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-lg font-semibold text-purple-900">Nowa strona</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-purple-700 mb-4">Utwórz nową stronę w systemie</p>
            <div className="flex items-center justify-center text-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Dodaj teraz</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
