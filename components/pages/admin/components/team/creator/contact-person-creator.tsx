'use client';

import { useContactTeamForm } from '@/hooks/use-contact-team-form';
import { ContactTeam } from '@/types/component-selector';
import { useRouter } from 'next/navigation';
import { ContactPersonForm } from './contact-person-form';
import { ContactPersonsList } from './contact-persons-list';
import { ContactTeamCreatorHeader } from './contact-team-creator-header';
import { TeamSettingsForm } from './team-settings-form';

interface ContactTeamCreatorProps {
  initialData?: ContactTeam;
}

export default function ContactTeamCreator({ initialData }: ContactTeamCreatorProps) {
  const router = useRouter();
  const saveContactTeam = (teamData: any) => {
    console.log('Saving contact team:', teamData);
  };

  const {
    formData,
    currentPerson,
    editingPersonIndex,
    handleFormDataChange,
    handleCurrentPersonChange,
    addPerson,
    editPerson,
    deletePerson,
    movePerson,
    cancelEdit,
    isFormValid,
    canAddPerson,
    getTeamData,
  } = useContactTeamForm(initialData);

  const handleBack = () => {
    console.log('Navigating back to components list');
    router.push('/admin/komponenty');
  };

  const handleSave = async () => {
    if (!isFormValid()) {
      console.log('Form validation failed');
      return;
    }

    const teamData = getTeamData();
    console.log('Saving contact team:', teamData);

    try {
      await saveContactTeam(teamData);
      console.log('Contact team saved successfully');
      router.push('/admin/komponenty');
    } catch (error) {
      console.error('Error saving contact team:', error);
      // TODO: Add proper error handling/toast notifications
    }
  };

  return (
    <div className="space-y-6">
      <ContactTeamCreatorHeader
        isEditing={!!initialData}
        onBack={handleBack}
        onSave={handleSave}
        canSave={isFormValid()}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TeamSettingsForm formData={formData} onFormDataChange={handleFormDataChange} />

        <ContactPersonForm
          currentPerson={currentPerson}
          onCurrentPersonChange={handleCurrentPersonChange}
          onAddPerson={addPerson}
          onCancelEdit={cancelEdit}
          editingIndex={editingPersonIndex}
          canAdd={canAddPerson()}
        />
      </div>

      <ContactPersonsList
        contactPersons={formData.contactPersons}
        onEdit={editPerson}
        onMove={movePerson}
        onDelete={deletePerson}
      />
    </div>
  );
}
