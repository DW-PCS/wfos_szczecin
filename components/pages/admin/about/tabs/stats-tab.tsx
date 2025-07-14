import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin/admin-about';
import { StatsCard } from '../cards/stats-card';

interface StatsTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function StatsTab({ aboutContent, setAboutContent, isEditing }: StatsTabProps) {
  return (
    <TabsContent value="stats" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Osiągnięcia</CardTitle>
          <CardDescription>Zarządzaj statystykami i osiągnięciami</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.achievements.map((stat, index) => (
              <StatsCard
                key={stat.id}
                stat={stat}
                index={index}
                aboutContent={aboutContent}
                setAboutContent={setAboutContent}
                isEditing={isEditing}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
