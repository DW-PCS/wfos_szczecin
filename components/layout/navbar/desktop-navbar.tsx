'use client';
import { allPages, menuItems } from '@/constants';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { AccesibilityControlsDesktop } from '../../features/navbar/accesibility-controls';
import { Logo } from '../../features/navbar/logo';

export const DesktopNavigation = () => {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsDesktopMenuOpen(prev => !prev);
  const closeMenu = () => setIsDesktopMenuOpen(false);

  const dropdownRef = useClickOutside<HTMLDivElement>(closeMenu, {
    enabled: isDesktopMenuOpen,
    ignoredElements: [triggerRef],
  });

  return (
    <div id="main-navigation" className="hidden lg:flex justify-between items-center">
      <div className="flex items-center h-16 w-full">
        <Logo />
        <nav className="flex items-center space-x-8 m-auto">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black hover:text-primary-green transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center">
        <AccesibilityControlsDesktop />
        <Button
          ref={triggerRef}
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="text-gray-600 ml-2 hover:text-primary-green cursor-pointer hover:bg-white"
          aria-label={isDesktopMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isDesktopMenuOpen}
        >
          {isDesktopMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {isDesktopMenuOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-5 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <h4 className="font-semibold text-gray-900">Wszystkie strony</h4>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {allPages.map((page, index) => (
                <Link
                  key={`${page.href}-${index}`}
                  href={page.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-green hover:bg-gray-50 transition-colors"
                  onClick={closeMenu}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
