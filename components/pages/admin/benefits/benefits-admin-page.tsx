'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useBenefitsForm } from '@/hooks/use-benefits-form';

import { Benefit } from '@/types/benefits';
import { Building2, DollarSign, Leaf } from 'lucide-react';
import { BenefitForm } from './benefit-form';
import { BenefitsHeader } from './benefits-header';
import { CategoryTabContent } from './category-tab-content';

interface BenefitsViewProps {
  benefits: Benefit[];
}

const categoryOptions = [
  { value: 'financial', label: 'Finansowe', icon: DollarSign },
  { value: 'organizational', label: 'Organizacyjne', icon: Building2 },
  { value: 'environmental', label: 'Środowiskowe', icon: Leaf },
];

export default function BenefitsView({ benefits }: BenefitsViewProps) {
  const addBenefit = (category: Benefit) => {};
  const updateBenefit = (id: number, data: Partial<Benefit>) => {};
  const deleteBenefit = (id: number) => {};
  const getBenefitsByCategory = (category: string) => {
    return benefits.filter(benefit => benefit.category === category);
  };

  const {
    isCreating,
    editingId,
    activeTab,
    newBenefit,
    setActiveTab,
    startCreating,
    cancelCreating,
    startEditing,
    cancelEditing,
    handleNewBenefitChange,
  } = useBenefitsForm();

  const handleSaveNew = async () => {
    if (newBenefit.title && newBenefit.description) {
      console.log('Creating new benefit:', newBenefit);
      try {
        await addBenefit(newBenefit);
        console.log('Benefit created successfully');
        cancelCreating();
      } catch (error) {
        console.error('Error creating benefit:', error);
      }
    }
  };

  const handleSaveEdit = async (benefit: Benefit) => {
    console.log('Updating benefit:', benefit.id, benefit);
    try {
      await updateBenefit(benefit.id, benefit);
      console.log('Benefit updated successfully');
      cancelEditing();
    } catch (error) {
      console.error('Error updating benefit:', error);
    }
  };

  const handleDelete = async (id: number) => {
    console.log('Deleting benefit:', id);
    try {
      await deleteBenefit(id);
      console.log('Benefit deleted successfully');
    } catch (error) {
      console.error('Error deleting benefit:', error);
    }
  };

  const handleUpdate = async (id: number, data: Partial<Benefit>) => {
    console.log('Updating benefit field:', id, data);
    try {
      await updateBenefit(id, data);
    } catch (error) {
      console.error('Error updating benefit field:', error);
    }
  };

  const handleAddBenefitWithCategory = (category: string) => {
    startCreating(category);
    setActiveTab(category);
  };

  return (
    <div className="space-y-6">
      <BenefitsHeader onAddBenefit={() => startCreating()} />

      {isCreating && (
        <BenefitForm
          benefit={newBenefit}
          onBenefitChange={handleNewBenefitChange}
          onSave={handleSaveNew}
          onCancel={cancelCreating}
        />
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="financial" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Finansowe
          </TabsTrigger>
          <TabsTrigger value="organizational" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Organizacyjne
          </TabsTrigger>
          <TabsTrigger value="environmental" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Środowiskowe
          </TabsTrigger>
        </TabsList>

        {categoryOptions.map(category => (
          <TabsContent key={category.value} value={category.value}>
            <CategoryTabContent
              category={category}
              benefits={getBenefitsByCategory(category.value as Benefit['category'])}
              editingId={editingId}
              onEdit={startEditing}
              onSave={handleSaveEdit}
              onCancelEdit={cancelEditing}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              onAddBenefit={handleAddBenefitWithCategory}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
