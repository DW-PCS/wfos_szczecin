import { FileItem } from '@/types/file';

export const getFileIcon = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return '📄';
    case 'doc':
    case 'docx':
      return '📝';
    case 'xls':
    case 'xlsx':
      return '📊';
    case 'png':
    case 'jpg':
    case 'jpeg':
      return '🖼️';
    case 'svg':
      return '🎨';
    default:
      return '📁';
  }
};

export const handleFileDownload = (file: FileItem): void => {
  if (file.fileUrl) {
    const link = document.createElement('a');
    link.href = file.fileUrl;
    link.download = `${file.name}.${file.type.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Fallback for files without actual URLs
    alert(`Pobieranie pliku: ${file.name}`);
  }
};
