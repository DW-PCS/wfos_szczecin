import { Article } from '@/components/pages/article';
import { newsArticles } from '@/constants';

import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ArticlePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const article = newsArticles.find(a => Number(a?.id) === Number(resolvedParams.id));

  if (!article) {
    notFound();
  }

  return <Article article={article} />;
};

export default ArticlePage;
