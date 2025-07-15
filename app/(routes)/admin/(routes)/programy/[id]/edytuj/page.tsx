import ProgramCreator from '@/components/pages/admin/programs/program-creator';
import { initialProgramPages } from '@/constants/program';
import { notFound } from 'next/navigation';

interface EditProgramPageProps {
  params: {
    id: string;
  };
}

export default async function EditProgramPage({ params }: EditProgramPageProps) {
  const resolvedParams = await params;
  const programId = parseInt(resolvedParams.id);

  const getProgram = (programId: number) => {
    return initialProgramPages.find(page => Number(page.id) === programId);
  };

  if (isNaN(programId)) {
    notFound();
  }

  const program = getProgram(programId);

  if (!program) {
    notFound();
  }

  return <ProgramCreator initialProgramData={program} />;
}
