import { isFormValid } from '@/lib/utils/helpers';
import { processContentToHtml } from '@/lib/utils/quill-editor-helpers';
import { Article } from '@/types/news';
import { useRouter } from 'next/navigation';
import { useCallback, useState, useTransition } from 'react';

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

interface ArticleEditorState {
  newsData: {
    title: string;
    excerpt: string;
    imageUrl: string;
  };
  settings: {
    category: string;
    author: string;
    featured: boolean;
    published: boolean;
  };
  content: string;
}

// API functions with proper error handling
const createArticle = async (data: ArticleFormData): Promise<Article> => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create article');
  }

  return response.json();
};

const updateArticle = async (id: string, data: ArticleFormData): Promise<Article> => {
  const response = await fetch(`/api/articles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to update article');
  }

  return response.json();
};

export const useArticleEditor = ({ article }: UseArticleEditorProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [state, setState] = useState<ArticleEditorState>({
    newsData: {
      title: article?.title ?? '',
      excerpt: article?.excerpt ?? '',
      imageUrl: article?.imageUrl ?? '',
    },
    settings: {
      category: article?.category ?? '',
      author: article?.author ?? 'Admin',
      featured: article?.featured ?? false,
      published: article?.published ?? false,
    },
    content: processContentToHtml(article?.content),
  });

  const isValid = isFormValid(state.content, state.newsData);
  const isEditing = Boolean(article?.id);

  const updateNewsData = useCallback((data: Partial<ArticleEditorState['newsData']>) => {
    setState(prev => ({
      ...prev,
      newsData: { ...prev.newsData, ...data },
    }));
  }, []);

  const updateSettings = useCallback((settings: Partial<ArticleEditorState['settings']>) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...settings },
    }));
  }, []);

  const updateContent = useCallback((content: string) => {
    setState(prev => ({ ...prev, content }));
  }, []);

  const handleCancel = useCallback(() => {
    router.push('/admin/aktualnosci');
  }, [router]);

  const handleSave = useCallback(
    (shouldPublish: boolean) => {
      if (!isValid) return;

      const formData: ArticleFormData = {
        ...state.newsData,
        ...state.settings,
        content: state.content,
        published: shouldPublish,
      };

      startTransition(async () => {
        try {
          const savedArticle =
            isEditing && article?.id
              ? await updateArticle(article.id, formData)
              : await createArticle(formData);

          if (savedArticle) {
            router.push('/admin/aktualnosci');
          }
        } catch (error) {
          console.error('Failed to save article:', error);
          // TODO: Implement proper error handling with toast notifications
          // Consider using a global error state or toast library
        }
      });
    },
    [isValid, state, isEditing, article?.id, router]
  );

  return {
    // State
    newsData: state.newsData,
    settings: state.settings,
    content: state.content,

    // Status
    isPending,
    isValid,
    isEditing,

    // Actions
    updateNewsData,
    updateSettings,
    updateContent,
    handleCancel,
    handleSave,
  } as const;
};
