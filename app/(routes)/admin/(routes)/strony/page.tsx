import PagesView from '@/components/pages/pages/pages-admin-page';
import { initialPages } from '@/constants/page';

const page = () => {
  return <PagesView pages={initialPages} />;
};

export default page;
