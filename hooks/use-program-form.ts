import { Program, ProgramPageType } from '@/types/program';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UseProgramFormProps {
  initialData?: Partial<ProgramPageType>;
}

export const useProgramForm = ({ initialData }: UseProgramFormProps = {}) => {
  const router = useRouter();

  const [formData, setFormData] = useState<Partial<ProgramPageType>>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    status: initialData?.status || 'planowany',
    budget: initialData?.budget || '',
    deadline: initialData?.deadline || '',
    beneficiaryCategories: initialData?.beneficiaryCategories || [],
    startDate: initialData?.startDate || undefined,
    endDate: initialData?.endDate || undefined,
    maxSupport: initialData?.maxSupport || '',
    funding: initialData?.funding || '',
    programLink: initialData?.programLink || '',
    linkedPageSlug: initialData?.linkedPageSlug || '',
    showOnHomepage: initialData?.showOnHomepage || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name?.trim()) {
      newErrors.name = 'Nazwa programu jest wymagana';
    }

    if (!formData.description?.trim()) {
      newErrors.description = 'Opis programu jest wymagany';
    }

    if (!formData.status) {
      newErrors.status = 'Status programu jest wymagany';
    }

    if (!formData.beneficiaryCategories?.length) {
      newErrors.beneficiaryCategories = 'Wybierz przynajmniej jedną kategorię beneficjentów';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const programData: Program = {
      id: initialData?.id || Date.now(),
      name: formData.name!,
      description: formData.description!,
      status: formData.status as Program['status'],
      budget: formData.budget,
      deadline: formData.deadline,
      beneficiaryCategories: formData.beneficiaryCategories!,
      startDate: formData.startDate,
      endDate: formData.endDate,
      maxSupport: formData.maxSupport,
      funding: formData.funding,
      programLink: formData.programLink,
      linkedPageSlug: formData.linkedPageSlug,
      showOnHomepage: formData.showOnHomepage,
    };

    if (initialData?.id) {
      // updateProgram(initialData.id, programData);
      console.log('update program', programData);
    } else {
      // addProgram(programData);
      console.log('add program', programData);
    }

    router.push('/admin/programy');
  };

  const handleClose = () => {
    router.push('/admin/programy');
  };

  return {
    formData,
    errors,
    updateField,
    validateForm,
    handleSave,
    handleClose,
  };
};
