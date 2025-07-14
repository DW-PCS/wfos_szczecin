import { Breadcrumbs } from '@/components/features/breadcrumbs';
import { ProgramDetails } from './card/program-details';
import { ProgramHeader } from './program-header';
import { ProgramImage } from './program-image';

interface ProgramPageProps {
  program: any;
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
