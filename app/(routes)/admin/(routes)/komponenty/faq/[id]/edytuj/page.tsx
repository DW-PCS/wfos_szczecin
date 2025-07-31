import FAQCreator from '@/components/pages/admin/components/faq/creator/faq-creator';
import { mockFAQComponents } from '@/constants/page';

interface PageProps {
  params: { id: string };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const getComponentById = (id: string) => {
    const component = mockFAQComponents.find(team => team.id === Number(id));
    return component;
  };

  return <FAQCreator initialData={getComponentById(id)} />;
};

export default page;
