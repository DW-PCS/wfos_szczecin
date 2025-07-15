import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

interface PageCreatorHeaderProps {
  onSave: () => void;
  isValid: boolean;
}

export const PageCreatorHeader = ({ onSave, isValid }: PageCreatorHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/admin/programy?tab=pages">
        <Button type="button" variant="outline">
          <ArrowLeft className="mr-2" />
          Powrót do stron
        </Button>
      </Link>

      <div className="flex gap-2">
        <Link href="/admin/programy?tab=pages">
          <Button type="button" variant="outline">
            Anuluj
          </Button>
        </Link>

        <Button type="button" onClick={onSave} disabled={!isValid}>
          <Save className="h-4 w-4 mr-2" />
          Zapisz stronę
        </Button>
      </div>
    </div>
  );
};
