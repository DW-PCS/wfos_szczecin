import { getProgramById } from '@/actions/program/program-action';
import ProgramCreator from '@/components/pages/admin/programs/creator/program-creator';
import { notFound } from 'next/navigation';

interface EditProgramPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProgramPage({ params }: EditProgramPageProps) {
  const resolvedParams = await params;
  const programId = parseInt(resolvedParams.id);

  if (isNaN(programId)) {
    notFound();
  }

  const program = await getProgramById(programId);

  if (!program) {
    notFound();
  }

  return <ProgramCreator initialProgramData={program} />;
}
