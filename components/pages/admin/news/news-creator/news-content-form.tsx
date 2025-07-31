'use client';

import { TinyMCEEditor } from '@/components/features';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { NewsImageUpload } from './news-image-upload';

interface NewsData {
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface NewsContentFormProps {
  newsData: NewsData;
  content: string;
  onNewsDataChange: (data: Partial<NewsData>) => void;
  onContentChange: (content: string) => void;
  disabled?: boolean;
}

export function NewsContentForm({
  newsData,
  content,
  onNewsDataChange,
  onContentChange,
}: NewsContentFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Treść artykułu</CardTitle>
        <CardDescription>Wprowadź szczegóły artykułu</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="news-title">Tytuł artykułu *</Label>
          <Input
            id="news-title"
            value={newsData.title}
            onChange={e => onNewsDataChange({ title: e.target.value })}
            placeholder="Wprowadź tytuł artykułu"
            className="text-lg font-medium"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="news-excerpt">Krótki opis *</Label>
          <Textarea
            id="news-excerpt"
            value={newsData.excerpt}
            onChange={e => onNewsDataChange({ excerpt: e.target.value })}
            placeholder="Wprowadź krótki opis artykułu (wyświetlany na liście aktualności)"
            rows={3}
          />
        </div>

        <NewsImageUpload
          imageUrl={newsData.imageUrl}
          onImageChange={(imageUrl: string) => onNewsDataChange({ imageUrl })}
        />

        <div className="grid gap-2">
          <Label htmlFor="news-content">Treść artykułu *</Label>

          <TinyMCEEditor initialValue={content} height={500} onEditorChange={onContentChange} />
        </div>
      </CardContent>
    </Card>
  );
}
