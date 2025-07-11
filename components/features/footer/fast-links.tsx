import { QUICK_LINKS } from '@/constants/footer';
import Link from 'next/link';

export const FastLinks = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-primary-lime flex items-center">
        <div className="w-1 h-6 bg-primary-lime rounded-full mr-3" />
        Szybkie linki
      </h4>
      <ul className="space-y-3">
        {QUICK_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-primary-green transition-colors duration-300 flex items-center group text-sm"
            >
              <span className="w-2 h-2 bg-primary-green/50 rounded-full mr-3 group-hover:bg-primary-green transition-colors duration-300" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
