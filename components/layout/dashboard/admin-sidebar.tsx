'use client';

import { Sidebar } from '@/components/layout/dashboard';
import { Button } from '@/components/ui/button';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/cn';
import { LogOut } from 'lucide-react';
import { useState } from 'react';

const HEADER_HEIGHT = 81;

interface AdminSidebarProps {
  children: React.ReactNode;
}

const AdminSidebar = ({ children }: AdminSidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(prev => !prev);

  const headerContent = (
    <>
      <SidebarTrigger onClick={toggleOpen} className="cursor-pointer hover:bg-white" />
      <div className="ml-auto flex items-center gap-x-4">
        <span className="text-sm text-gray-500 hidden sm:inline">Ostatnie logowanie:</span>
        <Button variant="outline" size="sm" className="py-5">
          <LogOut className="mr-1.5 h-4 w-4" />
          Wyloguj
        </Button>
      </div>
    </>
  );

  return (
    <SidebarProvider>
      <Sidebar />
      <div className="w-full">
        <div
          className={cn(
            'hidden md:flex shrink-0 items-center gap-2 border-b bg-white px-4 sidebarHeader',
            isOpen ? 'sidebarHeader-open' : 'sidebarHeader-closed'
          )}
          style={{ height: `${HEADER_HEIGHT}px` }}
        >
          {headerContent}
        </div>

        <div
          className="flex md:hidden shrink-0 items-center gap-2 border-b bg-white px-4 sidebarHeader"
          style={{ height: `${HEADER_HEIGHT}px` }}
        >
          {headerContent}
        </div>

        <SidebarInset className="p-6" style={{ marginTop: `${HEADER_HEIGHT}px` }}>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminSidebar;
