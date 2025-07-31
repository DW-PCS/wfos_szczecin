'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, Plus } from 'lucide-react';
import { AchievementCard } from './achievement-card';
import { Achievement } from '@/types/admin/admin-about';


interface PlacementTabContentProps {
  placement: {
    value: string;
    label: string;
  };
  achievements: Achievement[];
  editingId: number | null;
  onEdit: (achievement: Achievement) => void;
  onSave: (achievement: Achievement) => void;
  onCancelEdit: () => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Achievement>) => void;
  onAddAchievement: () => void;
}

export function PlacementTabContent({
  placement,
  achievements,
  editingId,
  onEdit,
  onSave,
  onCancelEdit,
  onDelete,
  onUpdate,
  onAddAchievement,
}: PlacementTabContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Statystyki - {placement.label}</h3>
        <Badge variant="outline">{achievements.length} statystyk</Badge>
      </div>

      <div className="grid gap-4">
        {achievements.map(achievement => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            isEditing={editingId === achievement.id}
            onEdit={() => onEdit(achievement)}
            onSave={onSave}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
            onUpdate={data => onUpdate(achievement.id, data)}
          />
        ))}

        {achievements.length === 0 && (
          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <BarChart3 className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Brak statystyk</h3>
              <p className="text-gray-500 text-center mb-4">
                Nie ma jeszcze żadnych statystyk dla tego umiejscowienia.
              </p>
              <Button onClick={onAddAchievement} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Dodaj pierwszą statystykę
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
