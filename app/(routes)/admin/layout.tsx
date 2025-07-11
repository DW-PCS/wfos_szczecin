import { AdminSidebar } from '@/components/layout/dashboard';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminSidebar>{children}</AdminSidebar>;
};

export default AdminLayout;
