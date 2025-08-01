interface PageProps {
  params: {
    slug: string;
  };
}

const ProgramDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <div>{slug}</div>;
};

export default ProgramDetailsPage;
