import ContactTeamCreator from '@/components/pages/admin/components/team/creator/contact-person-creator';
import { mockContactTeams } from '@/constants/page';

interface PageProps {
  params: { id: string };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const getComponentById = (id: string) => {
    const team = mockContactTeams.find(team => team.id === Number(id));
    return team;
  };
  return <ContactTeamCreator initialData={getComponentById(id)} />;
};

export default page;
