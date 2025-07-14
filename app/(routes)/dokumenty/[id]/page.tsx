import DocumentsPage from '@/components/pages/documents/document-view';

interface Params {
  id: string;
}

const page = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;

  return <DocumentsPage id={resolvedParams.id} />;
};

export default page;
