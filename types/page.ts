import { SelectedPageComponent } from './component-selector';
import { PdfFile } from './program';

export interface Page {
  id: string | number;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  uploadedImages: string[];
  pdfFiles: PdfFile[];
  author: string;
  dateAdded: string;
  published: boolean;
  slug?: string;
  selectedComponents?: SelectedPageComponent[];
  type?: 'general' | 'program';
}
