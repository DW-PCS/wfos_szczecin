'use client';
import { menuItems } from '@/constants';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { AccesibilityControlsMobile } from './accesibility-controls';
import { Logo } from './logo';

export const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between h-16 ">
        <Logo />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <>
          <div className=" bg-black/50 z-40" onClick={closeMenu} />

          <div className="flex flex-col py-6 px-4 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-green hover:bg-gray-50 transition-colors font-medium py-4 px-4 block text-center rounded-lg"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6 border-t border-gray-100 mt-6">
              <AccesibilityControlsMobile />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
