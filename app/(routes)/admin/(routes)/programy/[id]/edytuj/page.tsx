import { getProgramById } from '@/actions/program/program-action';
import ProgramCreator from '@/components/pages/admin/programs/creator/program-creator';
import { notFound } from 'next/navigation';

interface EditProgramPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProgramPage({ params }: EditProgramPageProps) {
  const { id } = await params;

  const program = await getProgramById(Number(id));

  if (!program) {
    notFound();
  }

  return <ProgramCreator initialProgramData={program} />;
}
