'use client';

import { deleteProgramById } from '@/actions/program/program-action';
import { deleteProgramPage } from '@/actions/program/program-page-action';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProgramsTabs } from '@/hooks/use-programs-tabs';
import { Page } from '@/types/page';
import { ProgramPageType } from '@/types/program';
import { useRouter } from 'next/navigation';
import { ProgramPagesGrid } from './program-pages-grid';
import { ProgramPagesTabHeader } from './program-pages-tab-header';
import { ProgramsGrid } from './programs-grid';
import { ProgramsHeader } from './programs-header';
import { ProgramsTabHeader } from './programs-tab-header';

interface ProgramsPageProps {
  programs: ProgramPageType[];
  programPages: Page[];
}

export default function ProgramsPage({ programs, programPages }: ProgramsPageProps) {
  const router = useRouter();
  const { activeTab, handleTabChange } = useProgramsTabs();

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
    console.log('Navigating to edit program page:', pageId);
    router.push(`/admin/programy/strony/${pageId}/edytuj`);
  };

  const handleDeleteProgram = async (programId: number) => {
    try {
      await deleteProgramById(programId);
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  const handleDeleteProgramPage = async (pageId: number) => {
    try {
      await deleteProgramPage(pageId);
    } catch (error) {
      console.error('Error deleting program page:', error);
    }
  };

  programPages.map(page => ({
    id: page.id,
    title: page.title,
    slug: page.slug || page.title.toLowerCase().replace(/\s+/g, '-'),
  }));

  return (
    <div className="space-y-6">
      <ProgramsHeader />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="programs">Programy</TabsTrigger>
          <TabsTrigger value="pages">Strony Programów</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="pt-6">
          <ProgramsTabHeader onCreateProgram={handleCreateProgram} />

          <ProgramsGrid
            programs={programs}
            onEdit={handleEditProgram}
            onDelete={handleDeleteProgram}
          />
        </TabsContent>

        <TabsContent value="pages" className="pt-6">
          <ProgramPagesTabHeader onCreatePage={handleCreateProgramPage} />

          <ProgramPagesGrid
            pages={programPages}
            onEdit={handleEditProgramPage}
            onDelete={handleDeleteProgramPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
