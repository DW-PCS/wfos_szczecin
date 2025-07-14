import { cn } from '@/lib/cn';
import Link from 'next/link';
import { FC } from 'react';

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  className?: string;
  currentPageTitle: string;
  parentPage: BreadcrumbItem;
  grandparentPage?: BreadcrumbItem;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className = '',
  currentPageTitle,
  parentPage,
  grandparentPage,
}) => {
  const buildHref = (baseHref: string, additionalHref?: string) => {
    if (!additionalHref) return `/${baseHref}`;
    return `/${baseHref}/${additionalHref}`;
  };

  return (
    <section className={cn('py-4 border-b', className)}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-green transition-colors">
            Strona główna
          </Link>

          <span aria-hidden="true">/</span>

          <Link
            href={buildHref(parentPage.href)}
            className="hover:text-primary-green transition-colors"
          >
            {parentPage.title}
          </Link>

          <span aria-hidden="true">/</span>

          {grandparentPage && (
            <>
              <Link
                href={buildHref(parentPage.href, grandparentPage.href)}
                className="hover:text-primary-green transition-colors"
              >
                {grandparentPage.title}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          )}

          <span className="text-black" aria-current="page">
            {currentPageTitle}
          </span>
        </nav>
      </div>
    </section>
  );
};
