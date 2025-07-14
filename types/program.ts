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
