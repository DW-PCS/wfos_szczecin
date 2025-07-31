'use client';

import { Achievement } from '@/types/admin/admin-about';
import { useState } from 'react';

export function useAchievementsForm() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('homepage');

  const [newAchievement, setNewAchievement] = useState<
    Omit<Achievement, 'createdAt' | 'updatedAt'>
  >({
    id: 0,
    number: '',
    label: '',
    icon: 'BarChart3',
    placement: 'homepage',
    active: true,
    order: 1,
    color: '',
  });

  const resetNewAchievement = () => {
    setNewAchievement({
      id: 1,
      number: '',
      label: '',
      icon: 'BarChart3',
      placement: 'homepage',
      active: true,
      order: 1,
      color: '',
    });
  };

  const startCreating = () => {
    setIsCreating(true);
    resetNewAchievement();
  };

  const cancelCreating = () => {
    setIsCreating(false);
    resetNewAchievement();
  };

  const startEditing = (achievement: Achievement) => {
    setEditingId(achievement.id);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handleNewAchievementChange = (data: Partial<typeof newAchievement>) => {
    setNewAchievement(prev => ({ ...prev, ...data }));
  };

  return {
    isCreating,
    editingId,
    activeTab,
    newAchievement,
    setActiveTab,
    startCreating,
    cancelCreating,
    startEditing,
    cancelEditing,
    handleNewAchievementChange,
  };
}
