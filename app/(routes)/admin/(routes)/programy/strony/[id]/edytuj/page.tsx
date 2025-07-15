import PageCreator from '@/components/pages/admin/pages/page-creator/page-creator';
import { initialPages } from '@/constants/page';
import { notFound } from 'next/navigation';

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditPage({ params }: EditPageProps) {
  const resolvedParams = await params;

  const getPage = (programId: number) => {
    return initialPages.find(page => Number(page.id) === programId);
  };
  const page = getPage(Number(resolvedParams.id));

  if (!page) {
    notFound();
  }

  return <PageCreator initialPageData={page} />;
}
