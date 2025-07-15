import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ProgramPageType } from '@/types/program';

import { BENEFICIARY_CATEGORIES } from '@/constants/admin/admin-program-creator';

interface BeneficiaryCategoriesFormProps {
  formData: Partial<ProgramPageType>;
  errors: Record<string, string>;
  onUpdate: <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => void;
}

export const BeneficiaryCategoriesForm = ({
  formData,
  errors,
  onUpdate,
}: BeneficiaryCategoriesFormProps) => {
  const handleBeneficiaryCategoryChange = (category: string, checked: boolean) => {
    const currentCategories = formData.beneficiaryCategories || [];
    const newCategories = checked
      ? [...currentCategories, category]
      : currentCategories.filter(c => c !== category);

    onUpdate('beneficiaryCategories', newCategories);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategorie beneficjentów *</CardTitle>
        <CardDescription>Wybierz grupy docelowe programu</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {BENEFICIARY_CATEGORIES.map(category => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={formData.beneficiaryCategories?.includes(category) || false}
              onCheckedChange={checked =>
                handleBeneficiaryCategoryChange(category, checked as boolean)
              }
            />
            <Label htmlFor={`category-${category}`} className="text-sm font-normal leading-relaxed">
              {category}
            </Label>
          </div>
        ))}
        {errors.beneficiaryCategories && (
          <p className="text-sm text-red-500">{errors.beneficiaryCategories}</p>
        )}
      </CardContent>
    </Card>
  );
};
