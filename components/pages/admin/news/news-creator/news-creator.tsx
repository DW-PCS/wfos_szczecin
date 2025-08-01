'use client';

import { useArticleEditor } from '@/hooks/use-article-editor';
import { Article } from '@/types/news';
import { NewsContentForm } from './news-content-form';
import { NewsCreatorHeader } from './news-creator-header';
import { NewsPreviewCard } from './news-preview-card';
import { NewsSettings, NewsSettingsSidebar } from './news-settings-sidebar';

interface NewsCreatorProps {
  article?: Article;
}

export default function NewsCreator({ article }: NewsCreatorProps) {
  const { newsData, settings, content, isPending, isValid, handleCancel, handleSave } =
    useArticleEditor({ article });

  function handleNewsDataChange(data: Partial<Article>): void {
    console.log(data, 'data');
    throw new Error('Function not implemented.');
  }

  function handleSettingsChange(settings: Partial<NewsSettings>): void {
    console.log('Settings changed:', settings);
  }

  function handleContentChange(data: string): void {
    console.log(data);
  }

  return (
    <div className="space-y-6">
      <NewsCreatorHeader
        isFormValid={isValid}
        isLoading={isPending}
        onCancel={handleCancel}
        onSaveDraft={() => handleSave(false)}
        onPublish={() => handleSave(true)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <NewsContentForm
            newsData={newsData}
            onNewsDataChange={handleNewsDataChange}
            onContentChange={handleContentChange}
            disabled={isPending}
            content={content}
          />
        </div>

        <div className="space-y-6">
          <NewsSettingsSidebar
            settings={settings}
            publishedAt={article?.publishedAt}
            onSettingsChange={handleSettingsChange}
            disabled={isPending}
          />

          <NewsPreviewCard
            title={newsData.title}
            excerpt={newsData.excerpt}
            category={settings.category}
            content={content}
          />
        </div>
      </div>
    </div>
  );
}
