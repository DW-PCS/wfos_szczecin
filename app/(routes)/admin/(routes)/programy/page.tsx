import { getPrograms } from '@/actions/program/program-action';
import ProgramsPage from '@/components/pages/admin/programs/programs-admin-page';

export default async function ProgramsAdminPage() {
  const { data: programs, error } = await getPrograms();

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-red-600">Unable to load programs</h1>
        <p className="text-gray-600 mt-2">{error}</p>
      </div>
    );
  }

  return <ProgramsPage programs={programs} />;
}
