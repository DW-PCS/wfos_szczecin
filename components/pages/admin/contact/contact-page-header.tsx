import { Button } from '@/components/ui/button';
import { Edit, Save, X } from 'lucide-react';

interface ContactPageHeaderProps {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
}

export function ContactPageHeader({
  isEditing,
  onEdit,
  onSave,
  onCancel,
  title = 'Strona Kontakt',
  description = 'Zarządzaj zawartością strony kontakt',
}: ContactPageHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={onCancel}>
              <X className="h-4 w-4 mr-2" />
              Anuluj
            </Button>
            <Button onClick={onSave}>
              <Save className="h-4 w-4 mr-2" />
              Zapisz zmiany
            </Button>
          </>
        ) : (
          <Button onClick={onEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edytuj stronę
          </Button>
        )}
      </div>
    </div>
  );
}
