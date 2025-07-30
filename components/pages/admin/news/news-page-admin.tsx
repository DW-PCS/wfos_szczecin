'use client';

import { Article } from '@/types/news';
import { useRouter } from 'next/navigation';
import { NewsGrid } from './news-grid';
import { NewsHeader } from './news-header';

export default function NewsView({ articles }: { articles: Article[] }) {
  const router = useRouter();

  const handleEditNews = (articleId: string) => {
    router.push(`/admin/aktualnosci/${articleId}/edytuj`);
  };

  const handleDeleteNews = (articleId: string) => {
    console.log(articleId);
  };

  const handleAddNew = () => {
    router.push('/admin/aktualnosci/nowy');
  };

  return (
    <div className="space-y-6">
      <NewsHeader onAddNew={handleAddNew} />
      <NewsGrid articles={articles} onEdit={handleEditNews} onDelete={handleDeleteNews} />
    </div>
  );
}
