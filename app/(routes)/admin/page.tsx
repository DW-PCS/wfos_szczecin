import DashboardView from '@/components/pages/dashboard/dashboard-admin-page';
import { newsArticles } from '@/constants';
import { initialPrograms } from '@/constants/programs';

const page = () => {
  return <DashboardView programs={initialPrograms} articles={newsArticles} activeUsersCount={0} />;
};

export default page;
