import ProgramsPage from '@/components/pages/programs/programs';

import { initialPrograms } from '@/constants';

const page = () => {
  return <ProgramsPage programs={initialPrograms} />;
};

export default page;
