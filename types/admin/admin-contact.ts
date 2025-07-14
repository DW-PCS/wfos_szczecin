export interface ContactPageHero {
  title: string;
  description: string;
  buttonText: string;
}

export interface ContactPageForm {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  privacyText: string;
  privacyLink: string;
  submitButtonText: string;
}

export interface ContactPageMap {
  title: string;
  description: string;
  embedUrl: string;
  active: boolean;
}

export interface ContactPageHeadquarters {
  title: string;
  description: string;
}

export interface ContactPageOtherOffices {
  title: string;
  description: string;
}

export interface ContactPageOffice {
  id: number;
  type: string;
  name: string;
  icon: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
  order: number;
  active: boolean;
  isHeadquarters: boolean;
}

export interface ContactPageContent {
  id: number;
  hero: ContactPageHero;
  form: ContactPageForm;
  map: ContactPageMap;
  headquarters: ContactPageHeadquarters;
  otherOffices: ContactPageOtherOffices;
  offices: ContactPageOffice[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactPageState {
  contactContent: ContactPageContent;
  isEditing: boolean;
  setContactContent: (content: ContactPageContent) => void;
  setIsEditing: (editing: boolean) => void;
  handleSave: () => void;
  handleCancel: () => void;
  addOffice: () => void;
  removeOffice: (id: number) => void;
  updateOffice: (id: number, updates: Partial<ContactPageOffice>) => void;
}


export type ContactTabValue = 'hero' | 'form' | 'map' | 'headquarters' | 'offices';
