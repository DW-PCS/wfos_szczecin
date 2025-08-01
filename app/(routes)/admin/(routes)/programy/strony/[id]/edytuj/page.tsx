import { PageCreator } from '@/components/pages/admin/pages/page-creator';
import { initialProgramPages } from '@/constants/program';

const EditProgramPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const getProgramById = async (id: string) => {
    return initialProgramPages.find(page => page.id === Number(id));
  };

  const program = await getProgramById(id);
  if (!program) {
    return;
  }

  return <PageCreator initialPageData={program} />;
};

export default EditProgramPage;
