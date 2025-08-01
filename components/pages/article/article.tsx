import { Breadcrumbs } from '@/components/features/breadcrumbs';
import type { Article } from '@/types/news';
import DOMPurify from 'isomorphic-dompurify';
import { ArticleContent } from './article-content';
import { ArticleHeader } from './article-header';
import { ArticleImage } from './article-image';

interface NewsProps {
  article: Article;
}

const Article = ({ article }: NewsProps) => {
  const sanitizedContent = DOMPurify.sanitize(article.content);
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Breadcrumbs
          currentPageTitle={article.title}
          parentPage={{ title: 'Aktualności', href: 'aktualnosci' }}
        />

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
