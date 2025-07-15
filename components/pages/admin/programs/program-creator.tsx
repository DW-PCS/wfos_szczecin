'use client';

import { useProgramForm } from '@/hooks/use-program-form';
import { ProgramPageType } from '@/types/program';
import { BasicInfoForm } from './basic-info-form';
import { BeneficiaryCategoriesForm } from './beneficiary-categories-form';
import { DatePickerForm } from './date-picker-form';
import { FinancialDetailsForm } from './financial-details-form';
import { HomepageDisplayForm } from './home-page-display-form';
import { LinksForm } from './links-form';
import { ProgramFormHeader } from './program-form-header';
import { ProgramPreview } from './program-preview';

interface ProgramCreatorProps {
  initialProgramData?: Partial<ProgramPageType>;
}

export default function ProgramCreator({ initialProgramData }: ProgramCreatorProps) {
  const { formData, errors, updateField, handleSave, handleClose } = useProgramForm({
    initialData: initialProgramData,
  });

  const isEdit = !!initialProgramData?.id;

  return (
    <div className="space-y-6">
      <ProgramFormHeader isEdit={isEdit} onSave={handleSave} onClose={handleClose} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BasicInfoForm formData={formData} errors={errors} onUpdate={updateField} />

          <FinancialDetailsForm formData={formData} onUpdate={updateField} />

          <DatePickerForm formData={formData} onUpdate={updateField} />

          <LinksForm formData={formData} onUpdate={updateField} />
        </div>

        <div className="space-y-6">
          <BeneficiaryCategoriesForm formData={formData} errors={errors} onUpdate={updateField} />

          <HomepageDisplayForm formData={formData} onUpdate={updateField} />

          <ProgramPreview formData={formData} />
        </div>
      </div>
    </div>
  );
}
