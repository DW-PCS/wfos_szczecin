import { getProgramById } from '@/actions/program/program-action';
import ProgramCreator from '@/components/pages/admin/programs/creator/program-creator';
import { notFound } from 'next/navigation';

interface EditProgramPageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function EditProgramPage({ params }: EditProgramPageProps) {
  const { id } = await params;

  if (id) {
    notFound();
  }

  const program = await getProgramById(id);

  if (!program) {
    notFound();
  }

  return <ProgramCreator initialProgramData={program} />;
}
