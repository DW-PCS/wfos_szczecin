import { generateSlug } from '@/lib/utils/helpers';
import { SelectedPageComponent } from '@/types/component-selector';
import { Page } from '@/types/page';
import { PdfFile } from '@/types/program';

import { useRef, useState } from 'react';

interface UsePageCreatorProps {
  initialPageData?: Partial<Page>;
  pageType?: 'general' | 'program';
}

export const usePageCreator = ({
  initialPageData,
  pageType = 'general',
}: UsePageCreatorProps = {}) => {
  const [newPage, setNewPage] = useState({
    title: initialPageData?.title || '',
    metaTitle: initialPageData?.metaTitle || '',
    metaDescription: initialPageData?.metaDescription || '',
    uploadedImages: initialPageData?.uploadedImages || ([] as string[]),
  });

  const [content, setContent] = useState<string>(() => {
    const initialContent = initialPageData?.content;
    if (typeof initialContent === 'string') {
      if (initialContent.includes('<') && initialContent.includes('>')) {
        return initialContent;
      }
      return initialContent ? `<p>${initialContent.replace(/\n/g, '</p><p>')}</p>` : '';
    }

    if (initialContent && typeof initialContent === 'object' && 'blocks' in initialContent) {
      const textContent = (initialContent as any).blocks
        .map((block: any) => block.data?.text || block.data?.message || '')
        .filter(Boolean)
        .join('</p><p>');
      return textContent ? `<p>${textContent}</p>` : '';
    }
    return '';
  });

  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>(initialPageData?.pdfFiles || []);
  const [selectedComponents, setSelectedComponents] = useState<SelectedPageComponent[]>(
    initialPageData?.selectedComponents || []
  );
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
  };

  const isPageFormValid = () => {
    const contentText = stripHtml(content).trim();
    return newPage.title.trim() !== '' && contentText !== '';
  };

  const updatePageField = <K extends keyof typeof newPage>(
    field: K,
    value: (typeof newPage)[K]
  ) => {
    setNewPage(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      try {
        const uploadPromises = Array.from(files).map(async file => {
          try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });

            if (response.ok) {
              const result = await response.json();
              return result.fileUrl;
            } else {
              console.error('Upload failed for file:', file.name);
              return null;
            }
          } catch (error) {
            console.error('Upload error for file:', file.name, error);
            return null;
          }
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        const validUrls = uploadedUrls.filter(url => url !== null);

        if (validUrls.length > 0) {
          setNewPage(prev => ({
            ...prev,
            uploadedImages: [...prev.uploadedImages, ...validUrls],
          }));
        }
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handlePdfUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      try {
        const uploadPromises = Array.from(files).map(async file => {
          try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });

            if (response.ok) {
              const result = await response.json();
              return {
                id: (Date.now() + Math.random()).toString(),
                fileName: result.fileName,
                displayName: file.name.replace(/\.pdf$/i, ''),
                fileUrl: result.fileUrl,
              };
            } else {
              console.error('Upload failed for file:', file.name);
              return null;
            }
          } catch (error) {
            console.error('Upload error for file:', file.name, error);
            return null;
          }
        });

        const uploadedPdfs = await Promise.all(uploadPromises);
        const validPdfs = uploadedPdfs.filter(pdf => pdf !== null);

        if (validPdfs.length > 0) {
          setPdfFiles(prev => [...prev, ...validPdfs]);
        }
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleRemoveImage = (imageToRemove: string) => {
    setNewPage(prev => ({
      ...prev,
      uploadedImages: prev.uploadedImages.filter(image => image !== imageToRemove),
    }));
  };

  const handleRemovePdf = (pdfId: string) => {
    setPdfFiles(prev => prev.filter(pdf => pdf.id !== pdfId));
  };

  const handleSave = () => {
    if (!isPageFormValid()) return;

    const pageData: Page = {
      ...newPage,
      content: content,
      pdfFiles: pdfFiles,
      selectedComponents: selectedComponents,
      id: initialPageData?.id || Date.now().toString(),
      slug: generateSlug(newPage.title),
      dateAdded: initialPageData?.dateAdded || new Date().toISOString(),
      author: initialPageData?.author || 'Admin',
      published: initialPageData?.published || false,
      type: initialPageData?.type || pageType,
    };
    console.log(pageData, 'pageData');
  };

  const previewUrl = newPage.title
    ? `/strony/${generateSlug(newPage.title)}`
    : '/strony/nowa-strona';

  return {
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
  };
};
