interface PageProps {
  params: {
    slug: string;
  };
}

const ProgramDetailsPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  return <div>123 {resolvedParams.slug}</div>;
};

export default ProgramDetailsPage;
