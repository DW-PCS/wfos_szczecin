'use client';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as SidebarUi,
} from '@/components/ui/sidebar';
import { dashboardMenuItems } from '@/constants';
import { ArrowLeft, Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <SidebarUi className="border-black/15 w-[255px]">
      <SidebarHeader className="border-b  border-black/15">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Admin Panel</h2>
            <p className="text-sm text-muted-foreground">WFOŚiGW CMS</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardMenuItems.map(item => (
                <Link key={item.id} href={item.href}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathname == item.href}
                      className="w-full justify-start cursor-pointer"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Link href="/">
            <SidebarMenuButton className="w-full justify-start cursor-pointer">
              <ArrowLeft /> Powrót
            </SidebarMenuButton>
          </Link>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUi>
  );
};

export default Sidebar;
