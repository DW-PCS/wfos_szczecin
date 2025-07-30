'use client';

import { useArticleEditor } from '@/hooks/use-article-editor';
import { Article } from '@/types/news';
import { NewsContentForm } from './news-content-form';
import { NewsCreatorHeader } from './news-creator-header';
import { NewsPreviewCard } from './news-preview-card';
import { NewsSettingsSidebar } from './news-settings-sidebar';

interface NewsCreatorProps {
  article?: Article;
}

export default function NewsCreator({ article }: NewsCreatorProps) {
  const {
    newsData,
    settings,
    content,
    isPending,
    isValid,
    handleNewsDataChange,
    handleSettingsChange,
    setContent,
    handleCancel,
    handleSave,
  } = useArticleEditor({ article });

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
            content={content}
            onNewsDataChange={handleNewsDataChange}
            onContentChange={setContent}
            disabled={isPending}
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
