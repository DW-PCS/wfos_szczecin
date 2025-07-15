'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initialProgramPages } from '@/constants/program';
import { initialPrograms } from '@/constants/programs';

import { cn } from '@/lib/cn';

import { format } from 'date-fns';
import { Edit, FilePlus2, LinkIcon, Plus, Trash2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProgramsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getProgramPages = () => {
    return initialProgramPages.filter(page => page.type === 'program');
  };
  const deletePage = (id: any) => {
    console.log('DELETE PAGE');
  };
  const deleteProgram = (id: any) => {
    console.log('DELETE program');
  };

  const programs = initialPrograms;
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

  const getProgramStatusVariant = (status: string) => {
    switch (status) {
      case 'otwarty':
        return 'default';
      case 'planowany':
        return 'secondary';
      case 'zakończony':
        return 'outline';
      case 'realizacja':
        return 'secondary';
      case 'zamknięty':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'otwarty':
        return 'Otwarty';
      case 'planowany':
        return 'Planowany';
      case 'zakończony':
        return 'Zakończony';
      case 'realizacja':
        return 'W realizacji';
      case 'zamknięty':
        return 'Nabór zamknięty';
      default:
        return status;
    }
  };

  const handleCreateProgram = () => {
    router.push('/admin/programy/nowy');
  };

  const handleEditProgram = (programId: number) => {
    router.push(`/admin/programy/${programId}/edytuj`);
  };

  const handleCreateProgramPage = () => {
    router.push('/admin/programy/strony/nowa');
  };

  const handleEditProgramPage = (pageId: number) => {
    router.push(`/admin/programy/strony/${pageId}/edytuj`);
  };

  const handleDeleteProgram = (programId: number) => {
    deleteProgram(programId);
  };

  const handleDeleteProgramPage = (pageId: number) => {
    deletePage(pageId);
  };

  const programPages = getProgramPages().map(page => ({
    id: page.id,
    title: page.name,
    slug: page.slug || page.name.toLowerCase().replace(/\s+/g, '-'),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Programy i Strony Programów</h1>
        <p className="text-gray-600">
          Zarządzaj programami dofinansowania oraz powiązanymi stronami
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="programs">Programy</TabsTrigger>
          <TabsTrigger value="pages">Strony Programów</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Lista Programów</h2>
            <Button onClick={handleCreateProgram} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Dodaj program
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((program: any) => (
              <Card key={program.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold">{program.name}</h3>
                        <Badge variant={getProgramStatusVariant(program.status)}>
                          {getStatusDisplay(program.status)}
                        </Badge>
                        {program.showOnHomepage && (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200"
                          >
                            Strona główna
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className={cn('text-blue-500 hover:text-blue-700 hover:bg-blue-50')}
                          onClick={() => handleEditProgram(program.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className={cn('text-red-500 hover:text-red-700 hover:bg-red-50')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-white">
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Czy na pewno chcesz usunąć program?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Tej akcji nie można cofnąć. Program "{program.name}" zostanie trwale
                                usunięty.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Anuluj</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => handleDeleteProgram(program.id)}
                              >
                                Usuń
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm">{program.description}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                      {program.budget && <span>Budżet: {program.budget}</span>}
                      {program.deadline && <span>Termin: {program.deadline}</span>}
                      {program.startDate && (
                        <span>Start: {format(program.startDate, 'dd.MM.yyyy')}</span>
                      )}
                      {program.endDate && (
                        <span>Koniec: {format(program.endDate, 'dd.MM.yyyy')}</span>
                      )}
                    </div>

                    {program.beneficiaryCategories && program.beneficiaryCategories.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {program.beneficiaryCategories.map((category: any) => (
                          <Badge key={category} variant="outline" className="text-xs font-normal">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {program.linkedPageSlug && (
                      <div className="text-xs text-primary-green flex items-center">
                        <LinkIcon className="h-3 w-3 mr-1" />
                        Strona: /programy/{program.linkedPageSlug}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pages" className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Strony powiązane z programami</h2>
            <Button onClick={handleCreateProgramPage} className="flex items-center gap-2">
              <FilePlus2 className="h-4 w-4" />
              Utwórz nową stronę programu
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programPages.length > 0 ? (
              programPages.map(page => (
                <Card key={page.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-semibold">{page.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            Strona programu
                          </Badge>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn('text-blue-500 hover:text-blue-700 hover:bg-blue-50')}
                            onClick={() => handleEditProgramPage(page.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className={cn('text-red-500 hover:text-red-700 hover:bg-red-50')}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-white">
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Czy na pewno chcesz usunąć stronę programu?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Tej akcji nie można cofnąć. Strona "{page.title}" zostanie trwale
                                  usunięta.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                <AlertDialogAction
                                  className="bg-red-600 hover:bg-red-700"
                                  onClick={() => handleDeleteProgramPage(page.id)}
                                >
                                  Usuń
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">
                        <span className="font-medium">URL:</span> /programy/szczegoly/{page.slug}
                      </div>

                      <div className="text-xs text-gray-500">
                        <span className="font-medium">ID:</span> {page.id}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-gray-500 py-8">
                    <p className="mb-2">Brak utworzonych stron programów.</p>
                    <p className="text-sm">
                      Możesz utworzyć nową stronę dedykowaną dla programu za pomocą przycisku
                      powyżej.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
