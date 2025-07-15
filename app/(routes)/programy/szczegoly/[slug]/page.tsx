import Foo from './Foo';

interface PageProps {
  params: {
    slug: string;
  };
}

const ProgramDetailsPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  return (
    <div>
      <Foo slug={resolvedParams.slug} />
    </div>
  );
};

export default ProgramDetailsPage;
