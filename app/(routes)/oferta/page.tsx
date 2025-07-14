import { ProgramsPage } from '@/components/pages/offer';

import { initialPrograms } from '@/constants';

const page = () => {
  return <ProgramsPage programs={initialPrograms} />;
};

export default page;
