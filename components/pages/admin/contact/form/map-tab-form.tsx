import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ContactPageMap } from '@/types/admin/admin-contact';


interface MapTabFormProps {
  map: ContactPageMap;
  onUpdate: (map: ContactPageMap) => void;
  isEditing: boolean;
}

export function MapTabForm({ map, onUpdate, isEditing }: MapTabFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="map-active"
          checked={map.active}
          onCheckedChange={checked => onUpdate({ ...map, active: checked })}
          disabled={!isEditing}
        />
        <Label htmlFor="map-active">Mapa aktywna</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="map-title">Tytuł mapy</Label>
        <Input
          id="map-title"
          value={map.title}
          onChange={e => onUpdate({ ...map, title: e.target.value })}
          disabled={!isEditing}
          placeholder="Tytuł mapy"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="map-description">Opis mapy</Label>
        <Textarea
          id="map-description"
          value={map.description}
          onChange={e => onUpdate({ ...map, description: e.target.value })}
          disabled={!isEditing}
          placeholder="Opis mapy"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="map-embed">URL embed mapy</Label>
        <Textarea
          id="map-embed"
          value={map.embedUrl}
          onChange={e => onUpdate({ ...map, embedUrl: e.target.value })}
          disabled={!isEditing}
          placeholder="URL embed Google Maps"
          rows={3}
        />
      </div>
    </div>
  );
}
