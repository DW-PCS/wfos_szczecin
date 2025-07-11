export interface Program {
  id: number;
  name: string;
  description: string;
  status: string;
  maxSupport?: string;
  budget?: string;
  deadline?: string;
  beneficiaryCategories?: string[];
  linkedPageSlug?: string;
  programLink?: string;
  startDate: Date;
  endDate: Date;
  funding: string;
}
