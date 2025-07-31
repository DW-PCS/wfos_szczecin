import AchievementsView from '@/components/pages/admin/achievements/achievement-admin-page';
import { initialAchievements } from '@/constants/admin/admin-achievements';

const page = () => {
  return <AchievementsView achievements={initialAchievements} />;
};

export default page;
