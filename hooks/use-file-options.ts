import { FileCategory, FileItem } from '@/types/file';
import { useRef, useState } from 'react';

interface FileForm {
  name: string;
  description: string;
  type: string;
  categoryId: string;
  file: File | null;
}

export function useFileOperations(categories: FileCategory[]) {
  const [isAddFileOpen, setIsAddFileOpen] = useState(false);
  const [editingFile, setEditingFile] = useState<FileItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [fileForm, setFileForm] = useState<FileForm>({
    name: '',
    description: '',
    type: '',
    categoryId: '',
    file: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const resetFileForm = () => {
    setFileForm({
      name: '',
      description: '',
      type: '',
      categoryId: '',
      file: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadFile = async (file: File): Promise<string | undefined> => {
    setIsUploading(true);
    try {
      console.log('Uploading file:', file.name);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('File uploaded successfully:', result.fileUrl);
        return result.fileUrl;
      } else {
        console.error('Upload failed');
        alert('Błąd podczas przesyłania pliku');
        return undefined;
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Błąd podczas przesyłania pliku');
      return undefined;
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSubmit = async () => {
    if (!fileForm.name || !fileForm.categoryId) {
      console.log('Form validation failed');
      return;
    }

    console.log('Submitting file:', fileForm);
    let fileUrl: string | undefined;

    if (fileForm.file) {
      fileUrl = await uploadFile(fileForm.file);
      if (!fileUrl) return; 
    }

    const fileData = {
      name: fileForm.name,
      description: fileForm.description,
      type: fileForm.type,
      size: fileForm.file ? formatFileSize(fileForm.file.size) : '0 B',
      categoryId: fileForm.categoryId,
      uploadedAt: new Date().toISOString(),
      fileUrl: fileUrl || (editingFile ? editingFile.fileUrl : undefined),
    };

    try {
      if (editingFile) {
        console.log('Updating file:', editingFile.id, fileData);
        // await updateFile(editingFile.id, fileData);
        setEditingFile(null);
      } else {
        console.log('Creating new file:', fileData);
        // await addFile(fileData);
      }

      resetFileForm();
      setIsAddFileOpen(false);
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileForm(prev => ({
        ...prev,
        file,
        name: prev.name || file.name.replace(/\.[^/.]+$/, ''),
        type: file.name.split('.').pop()?.toUpperCase() || '',
      }));
    }
  };

  const handleEditFile = (file: FileItem) => {
    console.log('Editing file:', file);
    setEditingFile(file);
    setFileForm({
      name: file.name,
      description: file.description,
      type: file.type,
      categoryId: file.categoryId,
      file: null,
    });
    setIsAddFileOpen(true);
  };

  const handleDeleteFile = async (fileId: string) => {
    console.log('Deleting file:', fileId);
    // TODO: Implement file deletion
  };

  const handleDownloadFile = (file: FileItem) => {
    console.log('Downloading file:', file.name);
    // TODO: Implement file download
  };

  const handleAddFile = () => {
    setEditingFile(null);
    resetFileForm();
    setIsAddFileOpen(true);
  };

  const handleFileFormChange = (data: Partial<FileForm>) => {
    setFileForm(prev => ({ ...prev, ...data }));
  };

  return {
    isAddFileOpen,
    setIsAddFileOpen,
    editingFile,
    setEditingFile,
    fileForm,
    setFileForm,
    fileInputRef,
    isUploading,
    formatFileSize,
    handleFileSubmit,
    handleEditFile,
    handleDeleteFile,
    handleDownloadFile,
    handleAddFile,
    handleFileFormChange,
    handleFileUpload,
  };
}
