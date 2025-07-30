'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsPreviewCardProps {
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

export function NewsPreviewCard({ title, excerpt, category, content }: NewsPreviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Podgląd</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title || 'Tytuł artykułu'}</h3>
          <p className="text-sm text-gray-600">{excerpt || 'Krótki opis artykułu'}</p>
          <div className="text-xs text-gray-500">
            {category && <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>}
          </div>
          {content && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-500 mb-2">Podgląd treści:</p>
              <div
                className="text-sm prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{
                  __html: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
                }}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
