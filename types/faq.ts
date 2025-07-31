export interface FAQItemType {
  id: string | number;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContactOption {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  linkText: string;
  type: 'link' | 'button';
}

export interface FAQState {
  openItems: number[];
  filteredItems: FAQItemType[];
  toggleItem: (index: number) => void;
  isItemOpen: (index: number) => boolean;
}

export interface FAQComponent {
  id: number;
  name: string;
  description: string;
  faqItems: FAQItemType[];
  placement: 'homepage' | 'contact' | 'programs' | 'about' | 'custom';
  customPlacement?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
