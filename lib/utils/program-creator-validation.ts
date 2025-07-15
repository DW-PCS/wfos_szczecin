import { ProgramPageType } from '@/types/program';

export interface ValidationErrors {
  [key: string]: string;
}

export const validateProgramForm = (formData: Partial<ProgramPageType>): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!formData.name?.trim()) {
    errors.name = 'Nazwa programu jest wymagana';
  }

  if (!formData.description?.trim()) {
    errors.description = 'Opis programu jest wymagany';
  }

  if (!formData.status) {
    errors.status = 'Status programu jest wymagany';
  }

  if (!formData.beneficiaryCategories?.length) {
    errors.beneficiaryCategories = 'Wybierz przynajmniej jedną kategorię beneficjentów';
  }

  return errors;
};
