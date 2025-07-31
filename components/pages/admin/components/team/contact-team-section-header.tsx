'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ContactTeamSectionHeaderProps {
  onCreateTeam: () => void;
}

export function ContactTeamSectionHeader({ onCreateTeam }: ContactTeamSectionHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Zespoły kontaktowe</h2>
        <p className="text-gray-600 text-sm">
          Zarządzaj zespołami i osobami kontaktowymi wyświetlanymi na stronie
        </p>
      </div>
      <Button className="flex items-center gap-2" onClick={onCreateTeam}>
        <Plus className="h-4 w-4" />
        Nowy zespół
      </Button>
    </div>
  );
}
