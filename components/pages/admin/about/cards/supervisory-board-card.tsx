import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AboutContent } from '@/types/admin/admin-about';
import { Plus, Users } from 'lucide-react';
import { PersonCard } from './person-card';

interface SupervisoryBoardCardProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function SupervisoryBoardCard({
  aboutContent,
  setAboutContent,
  isEditing,
}: SupervisoryBoardCardProps) {
  const addNewMember = () => {
    const newPerson = {
      id: Math.max(...aboutContent.supervisoryBoard.map(p => p.id), 0) + 1,
      name: '',
      role: '',
      order: aboutContent.supervisoryBoard.length + 1,
      active: true,
    };
    setAboutContent({
      ...aboutContent,
      supervisoryBoard: [...aboutContent.supervisoryBoard, newPerson],
    });
  };

  const removeMember = (index: number) => {
    const updated = aboutContent.supervisoryBoard.filter((_, i) => i !== index);
    setAboutContent({ ...aboutContent, supervisoryBoard: updated });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Rada Nadzorcza</CardTitle>
            <CardDescription>Zarządzaj członkami rady nadzorczej</CardDescription>
          </div>
          {isEditing && (
            <Button onClick={addNewMember} size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Dodaj członka
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {aboutContent.supervisoryBoard.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              index={index}
              onUpdate={updatedPerson => {
                const updated = [...aboutContent.supervisoryBoard];
                updated[index] = updatedPerson;
                setAboutContent({ ...aboutContent, supervisoryBoard: updated });
              }}
              onRemove={() => removeMember(index)}
              isEditing={isEditing}
              showDescription={false}
            />
          ))}
          {aboutContent.supervisoryBoard.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Brak członków rady nadzorczej</p>
              {isEditing && (
                <p className="text-sm">
                  Kliknij &ldquo;Dodaj członka&rdquo; aby dodać pierwszego członka
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
