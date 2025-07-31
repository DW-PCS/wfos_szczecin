'use client';
import { useFAQForm } from '@/hooks/use-faq-form';
import { FAQComponent } from '@/types/faq';

import { useRouter } from 'next/navigation';
import { FAQComponentSettings } from './faq-component-settings';
import { FAQCreatorHeader } from './faq-creator-header';
import { FAQItemForm } from './faq-item-form';
import { FAQItemsList } from './faq-items-list';

interface FAQCreatorProps {
  initialData?: FAQComponent;
}
export default function FAQCreator({ initialData }: FAQCreatorProps) {
  const router = useRouter();

  const saveFAQComponent = async (data: FAQComponent) => {
    console.log('Saving FAQ component:', data);
  };

  const {
    formData,
    currentFAQ,
    editingFAQIndex,
    handleFormDataChange,
    handleCurrentFAQChange,
    addFAQ,
    editFAQ,
    deleteFAQ,
    moveFAQ,
    cancelEdit,
    isFormValid,
    canAddFAQ,
    getComponentData,
  } = useFAQForm(initialData);

  const handleBack = () => {
    console.log('Navigating back to components list');
    router.push('/admin/komponenty');
  };

  const handleSave = async () => {
    if (!isFormValid()) {
      console.log('Form validation failed');
      return;
    }

    const componentData = getComponentData();
    console.log('Saving FAQ component:', componentData);

    try {
      await saveFAQComponent(componentData);
      console.log('FAQ component saved successfully');
      router.push('/admin/komponenty');
    } catch (error) {
      console.error('Error saving FAQ component:', error);
      // TODO: Add proper error handling/toast notifications
    }
  };

  return (
    <div className="space-y-6">
      <FAQCreatorHeader
        isEditing={!!initialData}
        onBack={handleBack}
        onSave={handleSave}
        canSave={isFormValid()}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FAQComponentSettings formData={formData} onFormDataChange={handleFormDataChange} />

        <FAQItemForm
          currentFAQ={currentFAQ}
          onCurrentFAQChange={handleCurrentFAQChange}
          onAddFAQ={addFAQ}
          onCancelEdit={cancelEdit}
          editingIndex={editingFAQIndex}
          canAdd={canAddFAQ()}
        />
      </div>

      <FAQItemsList
        faqItems={formData.faqItems}
        onEdit={editFAQ}
        onMove={moveFAQ}
        onDelete={deleteFAQ}
      />
    </div>
  );
}
