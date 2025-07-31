'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface AchievementsHeaderProps {
  onAddAchievement: () => void;
}

export function AchievementsHeader({ onAddAchievement }: AchievementsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Statystyki osiągnięć</h1>
        <p className="text-gray-600 mt-2">
          Zarządzaj statystykami wyświetlanymi w różnych miejscach na stronie
        </p>
      </div>
      <Button onClick={onAddAchievement}>
        <Plus className="h-4 w-4 mr-2" />
        Dodaj statystykę
      </Button>
    </div>
  );
}
