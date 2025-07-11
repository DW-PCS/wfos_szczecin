import { ArticleContent, ArticleHeader, ArticleImage, Breadcrumbs } from '@/components/features';
import DOMPurify from 'isomorphic-dompurify';

interface NewsProps {
  article: any;
}

const Article = ({ article }: NewsProps) => {
  const sanitizedContent = DOMPurify.sanitize(article.content);
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Breadcrumbs title={article.title} />

        <section className="py-8">
          <div className="container mx-auto px-4">
            <ArticleHeader article={article} />
          </div>
        </section>

        <ArticleImage article={article} />
        <ArticleContent content={sanitizedContent} />
      </main>
    </div>
  );
};

export default Article;
