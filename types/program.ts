// types/program.ts

export interface Program {
  id: number;
  name: string;
  description: string;
  status: 'otwarty' | 'planowany' | 'zakończony' | 'realizacja' | 'zamknięty';
  budget: string;
  deadline: string;
  beneficiaryCategories: any; // JSON type from Prisma
  startDate: Date;
  endDate: Date;
  maxSupport: string;
  funding: string;
  programLink: string | null;
  linkedPageSlug: string | null;
  showOnHomepage: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PdfFile {
  id: number;
  url: string;
  filename: string;
  originalName: string | null;
  displayName: string | null;
  size: number | null;
  mimeType: string | null;
  programPageId: string | number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProgramPageType {
  id: number | string;
  name: string;
  content: string | null;
  slug: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  description: string | null;
  uploadedImages: string[];
  selectedComponents: any;
  author: string | null;
  dateAdded: string | null;
  published: boolean;
  type: string | null;
  beneficiaryCategories: string[];
  maxSupport: string | null;
  funding: string | null;
  deadline: string | null;
  status: string | null;
  budget: string | null;
  startDate: Date | null;
  endDate: Date | null;
  programLink: string | null;
  linkedPageSlug: string | null;
  showOnHomepage: boolean;
  createdAt: Date;
  updatedAt: Date;
  pdfFiles?: PdfFile[];
}

export type ProgramType = 'general' | 'program';

export interface ProgramCategory {
  id: string;
  label: string;
}

// State management types
export interface ProgramsPageState {
  filteredPrograms: Program[];
  categories: ProgramCategory[];
  isLoading: boolean;
}

export interface ProgramDetailState {
  program: ProgramPageType | null;
  programPage: ProgramPageType | null;
  isLoading: boolean;
  notFoundState: boolean;
  loadContent: (params: Promise<{ id: string }>) => void;
}

// API response types
export interface ActionResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
  details?: any[];
}

export interface ProgramPagesResult {
  data: ProgramPageType[];
  error?: string;
}
