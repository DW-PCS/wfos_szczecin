import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { STATUS_OPTIONS } from '@/constants/admin/admin-program-creator';
import { cn } from '@/lib/cn';
import { Program, ProgramPageType } from '@/types/program';

interface BasicInfoFormProps {
  formData: Partial<ProgramPageType>;
  errors: Record<string, string>;
  onUpdate: <K extends keyof ProgramPageType>(field: K, value: ProgramPageType[K]) => void;
}

export const BasicInfoForm = ({ formData, errors, onUpdate }: BasicInfoFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Podstawowe informacje</CardTitle>
        <CardDescription>Główne dane programu dofinansowania</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nazwa programu *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={e => onUpdate('name', e.target.value)}
            placeholder="np. Czyste Powietrze"
            className={cn(errors.name && 'border-red-500')}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Opis programu *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e => onUpdate('description', e.target.value)}
            placeholder="Szczegółowy opis programu dofinansowania..."
            rows={4}
            className={cn(errors.description && 'border-red-500')}
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="status">Status programu *</Label>
            <Select
              value={formData.status}
              onValueChange={value => onUpdate('status', value as Program['status'])}
            >
              <SelectTrigger className={cn(errors.status && 'border-red-500')}>
                <SelectValue placeholder="Wybierz status" />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center space-x-2">
                      <div className={cn('w-2 h-2 rounded-full', option.color.split(' ')[0])} />
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budżet programu</Label>
            <Input
              id="budget"
              value={formData.budget}
              onChange={e => onUpdate('budget', e.target.value)}
              placeholder="np. 500 000 000 zł"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
