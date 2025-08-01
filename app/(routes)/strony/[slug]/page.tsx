interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

const pages = async ({ params }: PageParams) => {
  const awaitedParams = await params;

  console.log(awaitedParams.slug);
  return <div>pages</div>;
};

export default pages;
