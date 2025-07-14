export interface Program {
  id: number;
  name: string;
  description: string;
  status: 'otwarty' | 'planowany' | 'zakończony' | 'realizacja' | 'zamknięty';
  budget?: string;
  deadline?: string;
  beneficiaryCategories: string[];
  startDate?: Date;
  endDate?: Date;
  maxSupport?: string;
  funding?: string;
  programLink?: string;
  linkedPageSlug?: string;
  showOnHomepage?: boolean;
}

export interface ProgramCategory {
  id: string;
  label: string;
}

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

export interface ProgramPageType {
  id: string;
  name: string;
  content: string;
  pdfFiles?: PdfFile[];
  slug: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  uploadedImages: string[];
  selectedComponents: any[];
  author: string;
  dateAdded: string;
  published: boolean;
  type: string;
  beneficiaryCategories: string[];
  maxSupport?: string;
  funding?: string;
  deadline?: string;
  status?: string;
  budget?: string;
  startDate?: string;
  endDate?: string;
  programLink: string;
}
export interface PdfFile {
  id: string;
  displayName: string;
  fileName: string;
}
