import FilesPage from '@/components/pages/files/files';
import { defaultCategories } from '@/constants/files';

const page = () => {
  return <FilesPage categories={defaultCategories} />;
};

export default page;
