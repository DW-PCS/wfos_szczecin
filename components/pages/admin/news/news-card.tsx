'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Edit } from 'lucide-react';

import { Article } from '@/types/news';
import { NewsDeleteDialog } from './news-delete-dialog';

interface NewsCardProps {
  article: Article;
  onEdit: (articleId: string) => void;
  onDelete: (articleId: string) => void;
}

export function NewsCard({ article, onEdit, onDelete }: NewsCardProps) {
  return (
    <Card className="flex flex-col">
      {article.imageUrl && (
        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
          <img
            src={article.imageUrl || '/placeholder.svg'}
            alt={article.title}
            className="object-cover w-full h-full"
            width={400}
            height={225}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-1">
          <Badge variant={article.published ? 'default' : 'secondary'}>
            {article.published ? 'Opublikowane' : 'Szkic'}
          </Badge>
          <span className="text-xs text-gray-500">
            {format(new Date(article.publishedAt || article.createdAt), 'dd.MM.yyyy')}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
        {article.category && (
          <CardDescription className="text-xs text-primary-green">
            {article.category}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
      </CardContent>
      <div className="p-4 border-t flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onEdit(article.id)}>
          <Edit className="h-4 w-4 mr-2" />
          Edytuj
        </Button>
        <NewsDeleteDialog articleTitle={article.title} onConfirm={() => onDelete(article.id)} />
      </div>
    </Card>
  );
}
