import { LEGAL_LINKS } from '@/constants/footer';
import { ExternalLink, Shield } from 'lucide-react';
import Link from 'next/link';

const LegalLinks = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-primary-blue flex items-center">
        <Shield className="w-5 h-5 mr-3" />
        Informacje prawne
      </h4>
      <ul className="space-y-3">
        {LEGAL_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-primary-blue transition-colors duration-300 flex items-center group text-sm"
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span className="w-2 h-2 bg-primary-blue/50 rounded-full mr-3 group-hover:bg-primary-blue transition-colors duration-300" />
              {link.label}
              {link.external && <ExternalLink className="w-3 h-3 ml-1 opacity-60" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalLinks;
