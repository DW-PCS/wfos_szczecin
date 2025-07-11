'use client';
import { usePathname } from 'next/navigation';
import { DesktopNavigation, MobileNavigation } from '../features';

const Navbar = () => {
  const pathname = usePathname();
  const isAdminBoard = pathname.startsWith('/admin');

  if (isAdminBoard) {
    return null;
  }
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Navbar;
