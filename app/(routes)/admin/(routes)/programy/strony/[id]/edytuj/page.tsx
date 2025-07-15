import { initialProgramPages } from '@/constants/program';
import { notFound } from 'next/navigation';

interface EditProgramPageRouteProps {
  params: {
    id: string;
  };
}

export default async function EditProgramPageRoute({ params }: EditProgramPageRouteProps) {
  const resolvedParams = await params;

  const getPage = (programId: number) => {
    return initialProgramPages.find(page => Number(page.id) === programId);
  };
  const page = getPage(Number(resolvedParams.id));

  if (!page) {
    notFound();
  }

  <>div</>;
}
