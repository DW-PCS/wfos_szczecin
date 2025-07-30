import FilesView from '@/components/pages/admin/files/files-admin-page';
import { defaultCategories, defaultFiles } from '@/constants/files';

const page = () => {
  return <FilesView files={defaultFiles} categories={defaultCategories} />;
};

export default page;
