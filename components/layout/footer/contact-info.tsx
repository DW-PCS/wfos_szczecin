import { CONTACT_INFO } from '@/constants/footer';
import { cn } from '@/lib/cn';
import { ExternalLink, Phone } from 'lucide-react';
import Link from 'next/link';

export const Contact = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-primary-lime flex items-center">
        <Phone className="w-5 h-5 mr-3" />
        Kontakt
      </h4>

      <div className="space-y-4">
        {CONTACT_INFO.map((contact, index) => {
          const IconComponent = contact.icon;
          const isFirstItem = index === 0;

          return (
            <div
              key={index}
              className={cn('flex space-x-3', isFirstItem ? 'items-start' : 'items-center')}
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                  contact.bgColor,
                  isFirstItem && 'mt-1'
                )}
              >
                <IconComponent className={cn('h-5 w-5', contact.iconColor)} />
              </div>
              <div className="text-gray-300">
                <p className="font-medium text-white">{contact.title}</p>
                {contact.content.map((item, itemIndex) =>
                  contact.href ? (
                    <a
                      key={itemIndex}
                      href={contact.href}
                      className={cn('text-sm transition-colors', contact.hoverColor)}
                    >
                      {item}
                    </a>
                  ) : (
                    <p key={itemIndex} className="text-sm">
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-6 border-t border-gray-600">
        <p className="text-sm text-gray-400 mb-3">Partnerzy:</p>
        <Link
          href="https://nfosigw.gov.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary-green hover:text-primary-lime transition-colors duration-300 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10"
        >
          <span className="text-sm font-medium">NFOŚiGW</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
