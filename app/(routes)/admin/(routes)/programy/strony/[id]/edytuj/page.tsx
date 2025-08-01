import { getProgramPageById } from '@/actions/program/program-page-action';
import { PageCreator } from '@/components/pages/admin/pages/page-creator';

interface EditProgramPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditProgramPage = async ({ params }: EditProgramPageProps) => {
  const { id } = await params;

  const program = await getProgramPageById(Number(id));
  if (!program) {
    return;
  }

  return <PageCreator initialPageData={program} edit={id} />;
};

export default EditProgramPage;
