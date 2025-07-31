'use client';

import { Users } from 'lucide-react';

export function ContactTeamEmptyState() {
  return (
    <div className="text-center py-12 text-gray-500">
      <Users className="h-12 w-12 mx-auto mb-2 text-gray-400" />
      <p>Brak zespołów kontaktowych do wyświetlenia.</p>
      <p className="text-sm">Dodaj nowy zespół, aby zacząć.</p>
    </div>
  );
}
