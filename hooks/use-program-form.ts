import { createProgram, updateProgram } from '@/actions/program/program-action';
import { ProgramPageType } from '@/types/program';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface UseProgramFormProps {
  initialData?: Partial<ProgramPageType>;
}

interface FormErrors {
  [key: string]: string;
}

export const useProgramForm = ({ initialData }: UseProgramFormProps = {}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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

  const [errors, setErrors] = useState<FormErrors>({});

  const updateField = <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    console.log(formData, 'formData for validation');
    if (!formData.name?.trim()) {
      newErrors.name = 'Nazwa programu jest wymagana';
    }

    if (!formData.description?.trim()) {
      newErrors.description = 'Opis programu jest wymagany';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Data rozpoczęcia jest wymagana';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'Data zakończenia jest wymagana';
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

  const createFormData = (programData: Partial<ProgramPageType>): FormData => {
    const formDataObj = new FormData();

    Object.entries(programData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'beneficiaryCategories') {
          formDataObj.append(key, JSON.stringify(value));
        } else if (typeof value === 'boolean') {
          formDataObj.append(key, value.toString());
        } else {
          formDataObj.append(key, value.toString());
        }
      }
    });

    return formDataObj;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    startTransition(async () => {
      try {
        const formDataObj = createFormData(formData);

        const result = initialData?.id
          ? await updateProgram(initialData.id, formDataObj)
          : await createProgram(formDataObj);

        if (result.success) {
          router.push('/admin/programy');
        } else {
          if (result.details) {
            const serverErrors: FormErrors = {};
            result.details.forEach((issue: any) => {
              serverErrors[issue.path[0]] = issue.message;
            });
            setErrors(serverErrors);
          } else {
            setErrors({ general: result.error || 'Wystąpił błąd podczas zapisywania' });
          }
        }
      } catch (error) {
        console.error('Error saving program:', error);
        setErrors({ general: 'Wystąpił nieoczekiwany błąd' });
      }
    });
  };

  const handleClose = () => {
    router.push('/admin/programy');
  };

  return {
    formData,
    errors,
    isPending,
    updateField,
    validateForm,
    handleSave,
    handleClose,
  };
};
