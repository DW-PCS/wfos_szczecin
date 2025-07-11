import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export type LegalLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ContactInfoItem = {
  icon: typeof MapPin | typeof Phone | typeof Mail | typeof Clock;
  bgColor: string;
  iconColor: string;
  title: string;
  content: readonly string[];
  href?: string;
  hoverColor?: string;
};
