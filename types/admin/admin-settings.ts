export interface SiteSettings {
  siteName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  maintenanceMode: boolean;
  allowRegistrations: boolean;
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  position: 'header' | 'footer';
  order: number;
  active: boolean;
  parent: number | null;
  target: '_self' | '_blank';
}

export interface MenuItemFormData {
  label: string;
  url: string;
  position: 'header' | 'footer';
  order: number;
  active: boolean;
  parent: number | null;
  target: '_self' | '_blank';
}
