'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAchievementsForm } from '@/hooks/use-achievements-form';

import { Achievement } from '@/types/admin/admin-about';
import { AchievementForm } from './achievement-form';
import { AchievementsHeader } from './achievements-header';
import { PlacementTabContent } from './placement-tab-content';

interface AchievementsViewProps {
  achievements: Achievement[];
}

const placementOptions = [
  { value: 'homepage', label: 'Strona główna' },
  { value: 'about', label: 'Strona O nas' },
  { value: 'footer', label: 'Stopka' },
  { value: 'hero', label: 'Sekcja Hero' },
  { value: 'custom', label: 'Niestandardowe' },
];

export default function AchievementsView({ achievements }: AchievementsViewProps) {
  const addAchievement = (achievement: Achievement) => {
    console.log('Adding achievement:', achievement);
    // Logic to add achievement
  };
  const updateAchievement = (id: number, data: Partial<Achievement>) => {
    console.log('Updating achievement:', id, data);
    // Logic to update achievement
  };
  const deleteAchievement = (id: number) => {
    console.log('Deleting achievement:', id);
    // Logic to delete achievement
  };

  const getAchievementsByPlacement = (placement: Achievement['placement']) => {
    return achievements.filter(achievement => achievement.placement === placement);
  };

  const {
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
  } = useAchievementsForm();

  const handleSaveNew = async () => {
    if (newAchievement.number && newAchievement.label) {
      console.log('Creating new achievement:', newAchievement);
      try {
        await addAchievement(newAchievement);
        console.log('Achievement created successfully');
        cancelCreating();
      } catch (error) {
        console.error('Error creating achievement:', error);
      }
    }
  };

  const handleSaveEdit = async (achievement: Achievement) => {
    console.log('Updating achievement:', achievement.id, achievement);
    try {
      await updateAchievement(achievement.id, achievement);
      console.log('Achievement updated successfully');
      cancelEditing();
    } catch (error) {
      console.error('Error updating achievement:', error);
    }
  };

  const handleDelete = async (id: number) => {
    console.log('Deleting achievement:', id);
    try {
      await deleteAchievement(id);
      console.log('Achievement deleted successfully');
    } catch (error) {
      console.error('Error deleting achievement:', error);
    }
  };

  const handleUpdate = async (id: number, data: Partial<Achievement>) => {
    console.log('Updating achievement field:', id, data);
    try {
      await updateAchievement(id, data);
    } catch (error) {
      console.error('Error updating achievement field:', error);
    }
  };

  return (
    <div className="space-y-6">
      <AchievementsHeader onAddAchievement={startCreating} />

      {isCreating && (
        <AchievementForm
          achievement={newAchievement}
          onAchievementChange={handleNewAchievementChange}
          onSave={handleSaveNew}
          onCancel={cancelCreating}
        />
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="homepage">Strona główna</TabsTrigger>
          <TabsTrigger value="about">O nas</TabsTrigger>
          <TabsTrigger value="footer">Stopka</TabsTrigger>
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="custom">Niestandardowe</TabsTrigger>
        </TabsList>

        {placementOptions.map(placement => (
          <TabsContent key={placement.value} value={placement.value}>
            <PlacementTabContent
              placement={placement}
              achievements={getAchievementsByPlacement(placement.value as Achievement['placement'])}
              editingId={editingId}
              onEdit={startEditing}
              onSave={handleSaveEdit}
              onCancelEdit={cancelEditing}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              onAddAchievement={startCreating}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
