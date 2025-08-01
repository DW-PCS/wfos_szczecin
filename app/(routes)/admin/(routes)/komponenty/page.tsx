import ComponentsView from '@/components/pages/admin/components/components-page-admin';
import { initialFAQComponents } from '@/constants/faq';
import { mockContactTeams, mockHelpSections } from '@/constants/page';

const page = async () => {
  return (
    <ComponentsView
      contactTeams={mockContactTeams}
      helpSection={mockHelpSections[0]}
      faqComponents={initialFAQComponents}
    />
  );
};

export default page;
