import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin/admin-about';
import { Building, Plus } from 'lucide-react';
import { TeamCard } from '../cards';

interface TeamsTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function TeamsTab({ aboutContent, setAboutContent, isEditing }: TeamsTabProps) {
  const addNewTeam = () => {
    const newTeam = {
      id: Math.max(...aboutContent.teams.map(t => t.id), 0) + 1,
      name: '',
      description: '',
      icon: 'Building',
      order: aboutContent.teams.length + 1,
      active: true,
    };
    setAboutContent({
      ...aboutContent,
      teams: [...aboutContent.teams, newTeam],
    });
  };

  return (
    <TabsContent value="teams" className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zespoły</CardTitle>
              <CardDescription>Zarządzaj zespołami organizacji</CardDescription>
            </div>
            {isEditing && (
              <Button onClick={addNewTeam} size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Dodaj zespół
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.teams.map((team, index) => (
              <TeamCard
                key={team.id}
                team={team}
                index={index}
                aboutContent={aboutContent}
                setAboutContent={setAboutContent}
                isEditing={isEditing}
              />
            ))}
          </div>
          {aboutContent.teams.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Building className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Brak zespołów</p>
              {isEditing && (
                <p className="text-sm">Kliknij "Dodaj zespół" aby dodać pierwszy zespół</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
