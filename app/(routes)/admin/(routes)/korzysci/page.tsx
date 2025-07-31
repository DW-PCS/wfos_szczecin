import BenefitsView from '@/components/pages/admin/benefits/benefits-admin-page';
import { initialBenefits } from '@/constants/benefits';
const page = () => {
  return <BenefitsView benefits={initialBenefits} />;
};

export default page;
