import { getPrograms } from '@/actions/program/program-action';
import ProgramsPage from '@/components/pages/admin/programs/programs-admin-page';

async function page() {
  const programs = await getPrograms();

  console.log(programs, 'programs');

  return <ProgramsPage programs={programs} />;
}

export default page;
