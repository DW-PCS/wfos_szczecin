import NewsCreator from '@/components/pages/admin/news/news-creator/news-creator';
import { newsArticles } from '@/constants';

interface EditNewsPageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: EditNewsPageProps) => {
  const resolvedParams = await params;
  const articleId = parseInt(resolvedParams.id);

  const getArticle = (articleId: number) => {
    return newsArticles.find(article => Number(article.id) === articleId);
  };

  const article = getArticle(articleId);

  return <NewsCreator article={article} />;
};

export default page;
