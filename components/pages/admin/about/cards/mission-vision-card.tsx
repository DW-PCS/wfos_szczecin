import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AboutContent, MissionVisionItem } from "@/types/admin-about";
import { Trash2 } from "lucide-react";

interface MissionVisionCardProps {
  card: MissionVisionItem;
  index: number;
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
  onRemove?: () => void;
  showRemoveButton?: boolean;
}

export function MissionVisionCard({
  card,
  index,
  aboutContent,
  setAboutContent,
  isEditing,
  onRemove,
  showRemoveButton = false,
}: MissionVisionCardProps) {
  const updateCard = (updates: Partial<MissionVisionItem>) => {
    const updated = [...aboutContent.missionVision];
    updated[index] = { ...card, ...updates };
    setAboutContent({ ...aboutContent, missionVision: updated });
  };

  return (
    <div className="border rounded-lg p-4 relative">
      {isEditing && showRemoveButton && onRemove && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRemove}
          className="absolute top-2 right-2 h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

      <div className={`space-y-4 ${showRemoveButton ? 'pr-10' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Tytuł</Label>
            <Input
              value={card.title}
              onChange={e => updateCard({ title: e.target.value })}
              disabled={!isEditing}
              placeholder="Wprowadź tytuł"
            />
          </div>
          <div className="space-y-2">
            <Label>Ikona</Label>
            <Select
              value={card.icon}
              onValueChange={value => updateCard({ icon: value })}
              disabled={!isEditing}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lightning">⚡ Błyskawica</SelectItem>
                <SelectItem value="eye">👁️ Oko</SelectItem>
                <SelectItem value="target">🎯 Cel</SelectItem>
                <SelectItem value="heart">❤️ Serce</SelectItem>
                <SelectItem value="star">⭐ Gwiazda</SelectItem>
                <SelectItem value="shield">🛡️ Tarcza</SelectItem>
                <SelectItem value="rocket">🚀 Rakieta</SelectItem>
                <SelectItem value="bulb">💡 Żarówka</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Opis</Label>
          <Textarea
            value={card.description}
            onChange={e => updateCard({ description: e.target.value })}
            disabled={!isEditing}
            rows={3}
            placeholder="Wprowadź opis misji lub wizji"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch
              checked={card.active}
              onCheckedChange={checked => updateCard({ active: checked })}
              disabled={!isEditing}
            />
            <Label>Aktywna</Label>
          </div>

          {/* {card.type && (
            <div className="text-sm text-gray-500">
              Typ: {card.type === 'mission' ? 'Misja' : 'Wizja'}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
