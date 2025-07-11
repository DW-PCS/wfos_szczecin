import AdminSidebar from '@/components/layout/admin-sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminSidebar>{children}</AdminSidebar>;
};

export default AdminLayout;
