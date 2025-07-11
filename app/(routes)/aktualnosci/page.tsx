import ArticlesPage from '@/components/pages/articles/news';
import { newsArticles } from '@/constants';

export default function AktualnosciPage() {
  //const articles =  getArticles()

  const articles = newsArticles;

  return <ArticlesPage articles={articles} />;
}
