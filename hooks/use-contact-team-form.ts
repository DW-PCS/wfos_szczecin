'use client';

import { ContactPerson, ContactTeam } from '@/types/component-selector';
import { useState } from 'react';

interface ContactPersonFormData {
  firstName: string;
  lastName: string;
  specialization: string;
  email: string;
  phone: string;
  isActive: boolean;
  order: number;
}

export function useContactTeamForm(initialData?: ContactTeam) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    address: initialData?.address || '',
    city: initialData?.city || 'Szczecin',
    placement: initialData?.placement || 'contact',
    customPlacement: initialData?.customPlacement || '',
    isActive: initialData?.isActive ?? true,
    order: initialData?.order || 1,
    contactPersons: initialData?.contactPersons || [],
  });

  const [currentPerson, setCurrentPerson] = useState<ContactPersonFormData>({
    firstName: '',
    lastName: '',
    specialization: '',
    email: '',
    phone: '',
    isActive: true,
    order: (formData.contactPersons?.length || 0) + 1,
  });

  const [editingPersonIndex, setEditingPersonIndex] = useState<number | null>(null);

  const handleFormDataChange = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleCurrentPersonChange = (data: Partial<ContactPersonFormData>) => {
    setCurrentPerson(prev => ({ ...prev, ...data }));
  };

  const addPerson = () => {
    if (!currentPerson.firstName || !currentPerson.lastName || !currentPerson.email) return;

    const newPerson: ContactPerson = {
      id: Date.now(),
      firstName: currentPerson.firstName,
      lastName: currentPerson.lastName,
      specialization: currentPerson.specialization,
      email: currentPerson.email,
      phone: currentPerson.phone,
      active: currentPerson.isActive,
      order: currentPerson.order,
    };

    if (editingPersonIndex !== null) {
      const updatedPersons = [...formData.contactPersons];
      updatedPersons[editingPersonIndex] = {
        ...newPerson,
        id: formData.contactPersons[editingPersonIndex].id,
      };
      setFormData(prev => ({ ...prev, contactPersons: updatedPersons }));
      setEditingPersonIndex(null);
    } else {
      setFormData(prev => ({
        ...prev,
        contactPersons: [...prev.contactPersons, newPerson],
      }));
    }

    resetCurrentPerson();
  };

  const editPerson = (index: number) => {
    const person = formData.contactPersons[index];
    setCurrentPerson({
      firstName: person.firstName,
      lastName: person.lastName,
      specialization: person.specialization,
      email: person.email,
      phone: person.phone,
      isActive: person.active,
      order: person.order,
    });
    setEditingPersonIndex(index);
  };

  const deletePerson = (index: number) => {
    const updatedPersons = formData.contactPersons.filter((_: any, i: number) => i !== index);
    setFormData(prev => ({ ...prev, contactPersons: updatedPersons }));
  };

  const movePerson = (index: number, direction: 'up' | 'down') => {
    const persons = [...formData.contactPersons];
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= persons.length) return;

    [persons[index], persons[newIndex]] = [persons[newIndex], persons[index]];

    persons.forEach((person, i) => {
      person.order = i + 1;
    });

    setFormData(prev => ({ ...prev, contactPersons: persons }));
  };

  const resetCurrentPerson = () => {
    setCurrentPerson({
      firstName: '',
      lastName: '',
      specialization: '',
      email: '',
      phone: '',
      isActive: true,
      order: formData.contactPersons.length + 1,
    });
  };

  const cancelEdit = () => {
    setEditingPersonIndex(null);
    resetCurrentPerson();
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' && formData.address.trim() !== '' && formData.city.trim() !== ''
    );
  };

  const canAddPerson = () => {
    return (
      currentPerson.firstName.trim() !== '' &&
      currentPerson.lastName.trim() !== '' &&
      currentPerson.email.trim() !== ''
    );
  };

  const getTeamData = (): ContactTeam => {
    return {
      id: initialData?.id || Date.now(),
      name: formData.name,
      description: formData.description,
      address: formData.address,
      city: formData.city,
      placement: formData.placement as any,
      customPlacement: formData.customPlacement,
      isActive: formData.isActive,
      order: formData.order,
      contactPersons: formData.contactPersons,
      createdAt: initialData?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  };

  return {
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
  };
}
