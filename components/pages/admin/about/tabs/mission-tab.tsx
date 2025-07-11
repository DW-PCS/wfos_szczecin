import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin-about';
import { MissionVisionCard } from '../cards/mission-vision-card';

interface MissionTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function MissionTab({ aboutContent, setAboutContent, isEditing }: MissionTabProps) {
  return (
    <TabsContent value="mission" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Misja i Wizja</CardTitle>
          <CardDescription>Zarządzaj kartami misji i wizji organizacji</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {aboutContent.missionVision.map((card, index) => (
              <MissionVisionCard
                key={card.id}
                card={card}
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
