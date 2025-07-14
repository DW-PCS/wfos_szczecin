import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AboutContent } from '@/types/admin/admin-about';
import { Plus, Users } from 'lucide-react';
import { PersonCard } from './person-card';

interface ManagementBoardCardProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function ManagementBoardCard({
  aboutContent,
  setAboutContent,
  isEditing,
}: ManagementBoardCardProps) {
  const addNewMember = () => {
    const newPerson = {
      id: Math.max(...aboutContent.managementBoard.map(p => p.id), 0) + 1,
      name: '',
      role: '',
      description: '',
      order: aboutContent.managementBoard.length + 1,
      active: true,
    };
    setAboutContent({
      ...aboutContent,
      managementBoard: [...aboutContent.managementBoard, newPerson],
    });
  };

  const removeMember = (index: number) => {
    const updated = aboutContent.managementBoard.filter((_, i) => i !== index);
    setAboutContent({ ...aboutContent, managementBoard: updated });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Zarząd</CardTitle>
            <CardDescription>Zarządzaj członkami zarządu</CardDescription>
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
          {aboutContent.managementBoard.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              index={index}
              onUpdate={updatedPerson => {
                const updated = [...aboutContent.managementBoard];
                updated[index] = updatedPerson;
                setAboutContent({ ...aboutContent, managementBoard: updated });
              }}
              onRemove={() => removeMember(index)}
              isEditing={isEditing}
              showDescription={true}
            />
          ))}
          {aboutContent.managementBoard.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Brak członków zarządu</p>
              {isEditing && (
                <p className="text-sm">Kliknij "Dodaj członka" aby dodać pierwszego członka</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
