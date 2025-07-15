export interface Program {
  id: number;
  name: string;
  description: string;
  status: string;
  budget?: string;
  deadline?: string;
  beneficiaryCategories?: string[];
  startDate?: Date;
  endDate?: Date;
  maxSupport?: string;
  funding?: string;
  programLink?: string;
  linkedPageSlug?: string;
  showOnHomepage?: boolean;
}

export interface ProgramFormData {
  title: string;
  status: string;
  startDate?: Date;
  endDate?: Date;
  description: string;
  maxSupport: string;
  applicationDeadline: string;
  funding: string;
  programLink: string;
  beneficiaryCategories: string[];
  linkedPageSlug: string;
}

export interface ProgramPageLink {
  id: string;
  title: string;
  slug: string;
}

export interface ProgramPageType extends Program {
  slug?: string;
  type?: string;
}

export interface StatusOption {
  value: Program['status'];
  label: string;
  color: string;
}
