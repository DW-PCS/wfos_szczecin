import { FALLBACK_IMAGE } from '@/constants';
import { Article } from '@/types/news';
import Image from 'next/image';

export const ArticleImage = ({ article }: { article: Article }) => (
  <section className="mb-8">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto relative h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src={article.imageUrl || FALLBACK_IMAGE}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </section>
);
