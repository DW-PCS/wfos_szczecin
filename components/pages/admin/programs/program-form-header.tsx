import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, X } from 'lucide-react';

interface ProgramFormHeaderProps {
  isEdit: boolean;
  onSave: () => void;
  onClose: () => void;
}

export const ProgramFormHeader = ({ isEdit, onSave, onClose }: ProgramFormHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" className="py-5" onClick={onClose}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Powrót do stron
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edytuj program' : 'Nowy program'}
          </h1>
          <p className="text-gray-600">
            {isEdit
              ? 'Modyfikuj dane programu dofinansowania'
              : 'Utwórz nowy program dofinansowania'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" onClick={onClose}>
          <X className="h-4 w-4 mr-2" />
          Anuluj
        </Button>
        <Button onClick={onSave}>
          <Save className="h-4 w-4 mr-2" />
          Zapisz program
        </Button>
      </div>
    </div>
  );
};
