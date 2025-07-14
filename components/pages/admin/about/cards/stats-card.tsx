import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { AboutContent, Achievement } from '@/types/admin-about';
import { ChartColumnDecreasing, DollarSign, Leaf, Users } from 'lucide-react';

interface StatsCardProps {
  stat: Achievement;
  index: number;
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function StatsCard({
  stat,
  index,
  aboutContent,
  setAboutContent,
  isEditing,
}: StatsCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Liczba</Label>
            <Input
              value={stat.number}
              onChange={e => {
                const updated = [...aboutContent.achievements];
                updated[index] = { ...stat, number: e.target.value };
                setAboutContent({ ...aboutContent, achievements: updated });
              }}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label>Ikona</Label>
            <Select
              value={stat.icon}
              onValueChange={value => {
                const updated = [...aboutContent.achievements];
                updated[index] = { ...stat, icon: value };
                setAboutContent({ ...aboutContent, achievements: updated });
              }}
              disabled={!isEditing}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ChartColumnDecreasing">
                  <span className="inline-flex  gap-2 items-center">
                    <ChartColumnDecreasing /> Wykres
                  </span>
                </SelectItem>
                <SelectItem value="DollarSign">
                  <span className="inline-flex  gap-2 items-center">
                    <DollarSign />
                    Dolar
                  </span>
                </SelectItem>
                <SelectItem value="Users">
                  <span className="inline-flex  gap-2 items-center">
                    <Users />
                    Użytkownicy
                  </span>
                </SelectItem>
                <SelectItem value="Leaf">
                  <span className="inline-flex  gap-2 items-center">
                    <Leaf />
                    Liść
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Opis</Label>
          <Input
            value={stat.label}
            onChange={e => {
              const updated = [...aboutContent.achievements];
              updated[index] = { ...stat, label: e.target.value };
              setAboutContent({ ...aboutContent, achievements: updated });
            }}
            disabled={!isEditing}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={stat.active}
            onCheckedChange={checked => {
              const updated = [...aboutContent.achievements];
              updated[index] = { ...stat, active: checked };
              setAboutContent({ ...aboutContent, achievements: updated });
            }}
            disabled={!isEditing}
          />
          <Label>Aktywna</Label>
        </div>
      </div>
    </div>
  );
}
