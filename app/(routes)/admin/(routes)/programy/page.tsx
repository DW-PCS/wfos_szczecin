import { getPrograms } from '@/actions/program/program-action';
import ProgramsPage from '@/components/pages/admin/programs/programs-admin-page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function page() {
  const programs = await getPrograms();

  console.log(programs, 'programs');

  return <ProgramsPage programs={programs} />;
}

export default page;
