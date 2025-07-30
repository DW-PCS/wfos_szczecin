import { isFormValid } from '@/lib/utils/helpers';
import { processContentToHtml } from '@/lib/utils/quill-editor-helpers';
import { Article } from '@/types/news';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface ArticleFormData {
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
  category: string;
  author: string;
  featured: boolean;
  published: boolean;
}

interface UseArticleEditorProps {
  article?: Article;
  onSave?: (article: Article) => void;
}

async function createArticle(data: ArticleFormData): Promise<Article> {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create article');
  }

  return response.json();
}

async function updateArticle(id: string, data: ArticleFormData): Promise<Article> {
  const response = await fetch(`/api/articles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update article');
  }

  return response.json();
}

export function useArticleEditor({ article }: UseArticleEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [newsData, setNewsData] = useState({
    title: article?.title || '',
    excerpt: article?.excerpt || '',
    imageUrl: article?.imageUrl || '',
  });

  const [settings, setSettings] = useState({
    category: article?.category || '',
    author: article?.author || 'Admin',
    featured: article?.featured || false,
    published: article?.published || false,
  });

  const [content, setContent] = useState(processContentToHtml(article?.content));

  const isValid = isFormValid(content, newsData);
  const isEditing = Boolean(article?.id);

  const handleNewsDataChange = (data: Partial<typeof newsData>) => {
    setNewsData(prev => ({ ...prev, ...data }));
  };

  const handleSettingsChange = (newSettings: Partial<typeof settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const handleCancel = () => {
    router.push('/admin/aktualnosci');
  };

  const handleSave = (shouldPublish: boolean) => {
    if (!isValid) return;

    const formData: ArticleFormData = {
      ...newsData,
      ...settings,
      content,
      published: shouldPublish,
    };

    startTransition(async () => {
      try {
        const savedArticle =
          isEditing && article?.id
            ? await updateArticle(article.id, formData)
            : await createArticle(formData);

        savedArticle && router.push('/admin/aktualnosci');
      } catch (error) {
        console.error('Failed to save article:', error);
        // TODO: Add proper error handling/toast notification
      }
    });
  };

  return {
    newsData,
    settings,
    content,
    isPending,
    isValid,
    isEditing,

    handleNewsDataChange,
    handleSettingsChange,
    setContent,
    handleCancel,
    handleSave,
  };
}
