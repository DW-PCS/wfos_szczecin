export interface FileItem {
  id: string;
  name: string;
  description: string;
  type: string;
  size: string;
  uploadedAt: string;
  fileUrl?: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FileCategory {
  id: string;
  title: string;
  icon: string;
  description?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
