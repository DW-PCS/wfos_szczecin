'use client';

import { Benefit } from '@/types/benefits';
import { useState } from 'react';

export function useBenefitsForm() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('financial');

  const [newBenefit, setNewBenefit] = useState<Benefit>({
    id: 0,
    title: '',
    description: '',
    icon: 'Target',
    category: 'financial',
    isActive: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const resetNewBenefit = (category?: string) => {
    setNewBenefit({
      title: '',
      description: '',
      icon: 'Target',
      category: category || 'financial',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: 0,
      order: 1,
    });
  };

  const startCreating = (category?: string) => {
    setIsCreating(true);
    resetNewBenefit(category);
  };

  const cancelCreating = () => {
    setIsCreating(false);
    resetNewBenefit();
  };

  const startEditing = (benefit: Benefit) => {
    setEditingId(benefit.id);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handleNewBenefitChange = (data: Partial<typeof newBenefit>) => {
    setNewBenefit(prev => ({ ...prev, ...data }));
  };

  return {
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
  };
}
