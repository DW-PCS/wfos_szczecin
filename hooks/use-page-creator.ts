import { createProgramPage, updateProgramPage } from '@/actions/program/program-page-action';
import { generateSlug } from '@/lib/utils/helpers';
import { SelectedPageComponent } from '@/types/component-selector';
import { PdfFile, ProgramPageType } from '@/types/program';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

interface UsePageCreatorProps {
  initialPageData?: Partial<ProgramPageType>;
  pageType?: 'general' | 'program';
  edit?: string;
}

interface UploadResponse {
  fileUrl: string;
  fileName: string;
}

export const usePageCreator = ({
  initialPageData,
  pageType = 'general',
  edit,
}: UsePageCreatorProps = {}) => {
  const [newPage, setNewPage] = useState({
    name: initialPageData?.name ?? '',
    metaTitle: initialPageData?.metaTitle ?? '',
    metaDescription: initialPageData?.metaDescription ?? '',
    uploadedImages: initialPageData?.uploadedImages ?? ([] as string[]),
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

  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>(initialPageData?.pdfFiles ?? []);
  const [selectedComponents, setSelectedComponents] = useState<SelectedPageComponent[]>(
    initialPageData?.selectedComponents ?? []
  );
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
  };

  const isPageFormValid = (): boolean => {
    const contentText = stripHtml(content).trim();
    return newPage.name.trim() !== '' && contentText !== '';
  };

  const updatePageField = <K extends keyof typeof newPage>(
    field: K,
    value: (typeof newPage)[K]
  ): void => {
    setNewPage(prev => ({ ...prev, [field]: value }));
  };

  const uploadFile = async (file: File): Promise<UploadResponse | null> => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('Upload failed for file:', file.name);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Upload error for file:', file.name, error);
      return null;
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const uploadPromises = Array.from(files).map(uploadFile);
      const uploadResults = await Promise.all(uploadPromises);
      const validUrls = uploadResults
        .filter((result): result is UploadResponse => result !== null)
        .map(result => result.fileUrl);

      if (validUrls.length > 0) {
        setNewPage(prev => ({
          ...prev,
          uploadedImages: [...prev.uploadedImages, ...validUrls],
        }));
      }
    } finally {
      setIsUploading(false);
    }
  };

  const createPdfFile = (file: File, uploadResult: UploadResponse): PdfFile => {
    const now = new Date();

    return {
      id: Number(`${Date.now()}-${Math.random().toString(36).substr(2, 9)}`),
      url: uploadResult.fileUrl,
      filename: uploadResult.fileName,
      originalName: file.name,
      displayName: file.name.replace(/\.pdf$/i, ''),
      size: file.size,
      mimeType: file.type,
      createdAt: now,
      updatedAt: now,
      programPageId: initialPageData?.id ?? null,
    };
  };

  const handlePdfUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async file => {
        const uploadResult = await uploadFile(file);
        return uploadResult ? createPdfFile(file, uploadResult) : null;
      });

      const uploadedPdfs = await Promise.all(uploadPromises);
      const validPdfs = uploadedPdfs.filter((pdf): pdf is PdfFile => pdf !== null);

      if (validPdfs.length > 0) {
        setPdfFiles(prev => [...prev, ...validPdfs]);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = (imageToRemove: string): void => {
    setNewPage(prev => ({
      ...prev,
      uploadedImages: prev.uploadedImages.filter(image => image !== imageToRemove),
    }));
  };

  const handleRemovePdf = (pdfId: string): void => {
    setPdfFiles(prev => prev.filter(pdf => String(pdf.id) !== pdfId));
  };

  const handleSave = async (): Promise<void> => {
    if (!isPageFormValid()) return;

    const now = new Date();

    const formData = new FormData();

    formData.append('name', newPage.name);
    formData.append('content', content);
    formData.append('slug', generateSlug(newPage.name));
    formData.append('metaTitle', newPage.metaTitle);
    formData.append('metaDescription', newPage.metaDescription);
    formData.append('uploadedImages', JSON.stringify(newPage.uploadedImages));

    formData.append('selectedComponents', JSON.stringify(selectedComponents));
    formData.append('dateAdded', initialPageData?.dateAdded ?? now.toISOString());
    formData.append('author', initialPageData?.author ?? 'Admin');
    formData.append('published', String(initialPageData?.published ?? false));
    formData.append('type', initialPageData?.type ?? pageType);
    formData.append('description', initialPageData?.description ?? '');
    formData.append(
      'beneficiaryCategories',
      JSON.stringify(initialPageData?.beneficiaryCategories ?? ['general'])
    );
    formData.append('maxSupport', initialPageData?.maxSupport ?? '0');
    formData.append('funding', initialPageData?.funding ?? '');
    formData.append('deadline', initialPageData?.deadline ?? '');
    formData.append('status', initialPageData?.status ?? '');
    formData.append('budget', initialPageData?.budget ?? '');
    formData.append('startDate', initialPageData?.startDate?.toISOString() ?? now.toISOString());
    formData.append('endDate', initialPageData?.endDate?.toISOString() ?? now.toISOString());
    formData.append('programLink', initialPageData?.programLink ?? '');
    formData.append('linkedPageSlug', initialPageData?.linkedPageSlug ?? '');
    formData.append('showOnHomepage', String(initialPageData?.showOnHomepage ?? false));

    if (!!edit) {
      const result = await updateProgramPage(Number(edit), formData);
      if (result.success) {
        console.log('Page created successfully');
        router.push('/admin/programy?tab=pages');
        return;
      } else {
        console.error('Failed to create page:', result.error);
        if (result.details) {
          console.error('Validation errors:', result.details);
        }
      }
    }
    try {
      const result = await createProgramPage(formData);

      if (result.success) {
        console.log('Page created successfully');
        router.push('/admin/programy?tab=pages');
      } else {
        console.error('Failed to create page:', result.error);
        if (result.details) {
          console.error('Validation errors:', result.details);
        }
      }
    } catch (error) {
      console.error('Error creating page:', error);
    }
  };

  const previewUrl = newPage.name ? `/strony/${generateSlug(newPage.name)}` : '/strony/nowa-strona';

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
  } as const;
};
