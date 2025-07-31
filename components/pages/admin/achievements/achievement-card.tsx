'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { Edit } from 'lucide-react';

import { Achievement } from '@/types/admin/admin-about';
import { AchievementForm } from './achievement-form';
import { AchievementDeleteDialog } from './achievement-delete-dialog';

interface AchievementCardProps {
  achievement: Achievement;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (achievement: Achievement) => void;
  onCancelEdit: () => void;
  onDelete: (id: number) => void;
  onUpdate: (data: Partial<Achievement>) => void;
}

export function AchievementCard({
  achievement,
  isEditing,
  onEdit,
  onSave,
  onCancelEdit,
  onDelete,
  onUpdate,
}: AchievementCardProps) {
  if (isEditing) {
    return (
      <AchievementForm
        achievement={achievement}
        onAchievementChange={onUpdate}
        onSave={() => onSave(achievement)}
        onCancel={onCancelEdit}
        isEditing={true}
      />
    );
  }

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary-navy">{achievement.number}</div>
              <Badge variant={achievement.active ? 'default' : 'secondary'}>
                {achievement.active ? 'Aktywna' : 'Nieaktywna'}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onEdit}>
                <Edit className="h-4 w-4" />
              </Button>
              <AchievementDeleteDialog onConfirm={() => onDelete(achievement.id)} />
            </div>
          </div>

          <div className="text-gray-600">{achievement.label}</div>

          <div className="flex gap-4 text-sm text-gray-500">
            <span>Ikona: {achievement.icon}</span>
            <span>Kolejność: {achievement.order}</span>
            {achievement.color && <span>Kolor: {achievement.color}</span>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
