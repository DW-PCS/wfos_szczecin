import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface SaveButtonProps {
  onClick: () => void;
  text?: string;
}

export function SaveButton({ onClick, text = 'Zapisz zmiany' }: SaveButtonProps) {
  return (
    <Button onClick={onClick} className="flex items-center gap-2">
      <Save className="h-4 w-4" />
      {text}
    </Button>
  );
}
