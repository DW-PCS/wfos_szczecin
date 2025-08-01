import { Breadcrumbs } from '@/components/features/breadcrumbs';
import { ProgramDetails } from './card/program-details';
import { ProgramHeader } from './program-header';
import { ProgramImage } from './program-image';
import { Program, ProgramPageType } from '@/types/program';

interface ProgramPageProps {
  program: ProgramPageType;
}

const ProgramPage = ({ program }: ProgramPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Breadcrumbs
          parentPage={{ title: 'Programy', href: 'programy' }}
          currentPageTitle={program.name}
        />

        <ProgramHeader program={program} />
        <ProgramImage program={program} />
        <ProgramDetails program={program} />
      </main>
    </div>
  );
};

export default ProgramPage;
