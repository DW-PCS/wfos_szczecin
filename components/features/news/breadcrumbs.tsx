import { cn } from '@/lib/cn';
import Link from 'next/link';
import { FC } from 'react';

interface BreadcrumbsProps {
  className?: string;
  title: string;
  subtitle: {
    title: string;
    href: string;
  };
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ className = '', title, subtitle }) => {
  return (
    <section className={cn('py-4 border-b', className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-green transition-colors">
            Strona główna
          </Link>
          <span>/</span>
          <Link href={`/${subtitle.href}`} className="hover:text-primary-green transition-colors">
            {subtitle.title}
          </Link>
          <span>/</span>
          <span className="text-black">{title}</span>
        </div>
      </div>
    </section>
  );
};
