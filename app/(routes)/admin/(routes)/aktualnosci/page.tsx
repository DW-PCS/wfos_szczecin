import NewsView from '@/components/pages/admin/news/news-page-admin';
import { newsArticles } from '@/constants';

const page = () => {

  return <NewsView articles={newsArticles} />;
};

export default page;
