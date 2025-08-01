import { JsonValue } from '@prisma/client/runtime/library';
import { PdfFile } from './program';

export interface Page {
  id: number;
  title: string;
  content: string;
  metaTitle: string | null;
  metaDescription: string;
  uploadedImages: string[];
  pdfFiles: PdfFile[];
  author: string;
  dateAdded: string;
  published: boolean;
  slug: string | null;
  selectedComponents: JsonValue;
  type: string;
}
