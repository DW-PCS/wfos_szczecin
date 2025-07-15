'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockContactTeams, mockFAQComponents, mockHelpSections } from '@/constants/page';
import { usePageCreator } from '@/hooks/use-page-creator';
import { Page } from '@/types/page';
import { PageCreatorHeader } from './page-creator-header';
import { ComponentsTab } from './tabs/component-tab';
import { ContentTab } from './tabs/content-tab';
import { MediaTab } from './tabs/miedia-tab';
import { SeoTab } from './tabs/seo-tab';

interface PageCreatorProps {
  initialPageData?: Partial<Page>;
  pageType?: 'general' | 'program';
}

export default function PageCreator({ initialPageData, pageType = 'general' }: PageCreatorProps) {
  const {
    newPage,
    content,
    setContent,
    pdfFiles,
    selectedComponents,
    setSelectedComponents,
    isUploading,
    fileInputRef,
    pdfInputRef,
    isPageFormValid,
    updatePageField,
    handleImageUpload,
    handlePdfUpload,
    handleRemoveImage,
    handleRemovePdf,
    handleSave,
    previewUrl,
  } = usePageCreator({
    initialPageData,
    pageType,
  });

  return (
    <div className="space-y-6">
      <PageCreatorHeader onSave={handleSave} isValid={isPageFormValid()} />

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Treść</TabsTrigger>
          <TabsTrigger value="components">Komponenty</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <ContentTab
            title={newPage.title}
            content={content}
            previewUrl={previewUrl}
            onTitleChange={title => updatePageField('title', title)}
            onContentChange={setContent}
          />
        </TabsContent>

        <TabsContent value="components" className="space-y-6">
          <ComponentsTab
            selectedComponents={selectedComponents}
            onComponentsChange={setSelectedComponents}
            availableFAQComponents={mockFAQComponents}
            availableContactTeams={mockContactTeams}
            availableHelpSections={mockHelpSections}
          />
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <SeoTab
            title={newPage.title}
            metaTitle={newPage.metaTitle}
            metaDescription={newPage.metaDescription}
            previewUrl={previewUrl}
            onMetaTitleChange={metaTitle => updatePageField('metaTitle', metaTitle)}
            onMetaDescriptionChange={metaDescription =>
              updatePageField('metaDescription', metaDescription)
            }
          />
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <MediaTab
            uploadedImages={newPage.uploadedImages}
            pdfFiles={pdfFiles}
            isUploading={isUploading}
            fileInputRef={fileInputRef}
            pdfInputRef={pdfInputRef}
            onImageUpload={handleImageUpload}
            onPdfUpload={handlePdfUpload}
            onRemoveImage={handleRemoveImage}
            onRemovePdf={handleRemovePdf}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
