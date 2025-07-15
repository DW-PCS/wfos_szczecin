export interface SelectedPageComponent {
  id: string;
  type: 'faq' | 'contact-team' | 'help-section';
  componentId: number;
  order: number;
  active: boolean;
}
export interface FAQComponent {
  id: number;
  name: string;
  description: string;
  faqItems: FAQItem[];
  placement: 'homepage' | 'contact' | 'programs' | 'about' | 'custom';
  customPlacement?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContactTeam {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  contactPersons: ContactPerson[];
  placement: 'homepage' | 'contact' | 'programs' | 'about' | 'custom';
  customPlacement?: string;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
export interface ContactPerson {
  id: number;
  firstName: string;
  lastName: string;
  specialization: string;
  email: string;
  phone: string;
  order: number;
  active: boolean;
}

export interface HelpSectionComponent {
  id: number;
  title: string;
  description: string;
  contacts: HelpSectionContact[];
  placements: ('homepage' | 'contact' | 'programs' | 'about' | 'custom')[];
  customPlacements: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface HelpSectionContact {
  id: number;
  type: 'phone' | 'email' | 'chat';
  title: string;
  description: string;
  value: string;
  icon: string;
  active: boolean;
  order: number;
}
