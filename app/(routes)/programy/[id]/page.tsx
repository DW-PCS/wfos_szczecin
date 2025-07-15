import ProgramPage from '@/components/pages/program/program-page';
import { initialProgramPages } from '@/constants/program';
import { getPageById } from '@/lib/utils/programs';

interface PageProps {
  params: {
    id: string;
  };
}
const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const program = getPageById({ id: Number(resolvedParams.id), programs: initialProgramPages });
  
  if (!program) {
    return;
  }

  return <ProgramPage program={program} />;
};

export default page;
