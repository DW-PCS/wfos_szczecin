import { getProgramPageBySlug } from '@/actions/program/program-page-action';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProgramDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const page = await getProgramPageBySlug(slug);
  console.log(page, 'page');
  return <div>{slug}</div>;
};

export default ProgramDetailsPage;
