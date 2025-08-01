import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { StatsBox } from '@/types/admin/admin-homepage';
import { Edit, Eye, EyeOff, GripVertical, ImageIcon, Plus, Save, Trash2, X } from 'lucide-react';
import { useState } from 'react';

interface AdminStatsSectionTabProps {
  handleSaveContent: () => void;
}

export function AdminStatsSectionTab({ handleSaveContent }: AdminStatsSectionTabProps) {
  const [statsSettings, setStatsSettings] = useState({
    title: 'Ochrona Środowiska w Praktyce',
    subtitle: 'Wspieramy inicjatywy ekologiczne...',
    backgroundImage: undefined as string | undefined,
    boxes: [] as StatsBox[],
  });

  const [editingBox, setEditingBox] = useState<string | null>(null);
  const [newBox, setNewBox] = useState<Partial<StatsBox>>({
    title: '',
    description: '',
    icon: 'energy',
    iconColor: 'text-white',
    backgroundColor: 'bg-primary-green',
    isActive: true,
    order: 1,
  });

  const statsImageRef = useState<HTMLInputElement | null>(null);

  const updateStatsSettings = (updates: Partial<typeof statsSettings>) => {
    setStatsSettings(prev => ({ ...prev, ...updates }));
  };

  const updateBox = (boxId: string, updates: Partial<StatsBox>) => {
    setStatsSettings(prev => ({
      ...prev,
      boxes: prev.boxes.map(box => (box.id === boxId ? { ...box, ...updates } : box)),
    }));
  };

  const handleAddBox = () => {
    if (newBox.title && newBox.description) {
      const newBoxWithId = {
        ...newBox,
        id: Date.now().toString(),
        order: statsSettings.boxes.length + 1,
      } as StatsBox;

      setStatsSettings(prev => ({
        ...prev,
        boxes: [...prev.boxes, newBoxWithId],
      }));

      setNewBox({
        title: '',
        description: '',
        icon: 'energy',
        iconColor: 'text-white',
        backgroundColor: 'bg-primary-green',
        isActive: true,
        order: statsSettings.boxes.length + 2,
      });
    }
  };

  const handleDeleteBox = (boxId: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten box?')) {
      setStatsSettings(prev => ({
        ...prev,
        boxes: prev.boxes.filter(box => box.id !== boxId),
      }));
    }
  };

  const handleStatsImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      updateStatsSettings({ backgroundImage: imageUrl });
    }
  };

  const removeStatsImage = () => {
    updateStatsSettings({ backgroundImage: undefined });
  };

  return (
    <TabsContent value="stats-section" className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Sekcja &ldquo;Ochrona Środowiska w Praktyce&rdquo;</CardTitle>
          <CardDescription>
            Zarządzaj tytułem, opisem, obrazem tła i boxami w sekcji statystyk
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stats-title">Tytuł sekcji</Label>
              <Input
                id="stats-title"
                value={statsSettings.title}
                onChange={e => updateStatsSettings({ title: e.target.value })}
                placeholder="Ochrona Środowiska w Praktyce"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stats-subtitle">Podtytuł sekcji</Label>
              <Textarea
                id="stats-subtitle"
                value={statsSettings.subtitle}
                onChange={e => updateStatsSettings({ subtitle: e.target.value })}
                placeholder="Wspieramy inicjatywy ekologiczne..."
                rows={2}
              />
            </div>
          </div>

          {/* Background Image Upload */}
          <div className="space-y-2">
            <Label>Obraz tła sekcji</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                ref={el => {
                  statsImageRef[1](el);
                }}
                onChange={handleStatsImageUpload}
                accept="image/*"
                className="hidden"
              />
              {statsSettings.backgroundImage ? (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={statsSettings.backgroundImage}
                      alt="Stats background preview"
                      className="max-w-full h-48 object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => statsImageRef[0]?.click()}
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Zmień obraz
                    </Button>
                    <Button type="button" variant="outline" onClick={removeStatsImage}>
                      <X className="h-4 w-4 mr-2" />
                      Resetuj obraz
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Przeciągnij obraz tutaj lub kliknij aby wybrać
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Obraz będzie używany jako tło sekcji statystyk
                  </p>
                  <Button type="button" variant="outline" onClick={() => statsImageRef[0]?.click()}>
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Wybierz obraz
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Add new box form */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Dodaj nowy box
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tytuł boxu</Label>
                <Input
                  value={newBox.title || ''}
                  onChange={e => setNewBox({ ...newBox, title: e.target.value })}
                  placeholder="Np. Czysta Energia"
                />
              </div>
              <div className="space-y-2">
                <Label>Ikona</Label>
                <Select
                  value={newBox.icon || 'energy'}
                  onValueChange={value => setNewBox({ ...newBox, icon: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="energy">Energia (błyskawica)</SelectItem>
                    <SelectItem value="heart">Serce (ochrona)</SelectItem>
                    <SelectItem value="leaf">Liść (natura)</SelectItem>
                    <SelectItem value="water">Woda (kropla)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Opis boxu</Label>
                <Textarea
                  value={newBox.description || ''}
                  onChange={e => setNewBox({ ...newBox, description: e.target.value })}
                  placeholder="Opis tego co robi ten box..."
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Kolor tła ikony</Label>
                <Select
                  value={newBox.backgroundColor || 'bg-primary-green'}
                  onValueChange={value => setNewBox({ ...newBox, backgroundColor: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bg-primary-green">Zielony</SelectItem>
                    <SelectItem value="bg-primary-lime">Limonkowy</SelectItem>
                    <SelectItem value="bg-primary-navy">Granatowy</SelectItem>
                    <SelectItem value="bg-primary-blue">Niebieski</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Kolor ikony</Label>
                <Select
                  value={newBox.iconColor || 'text-white'}
                  onValueChange={value => setNewBox({ ...newBox, iconColor: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-white">Biały</SelectItem>
                    <SelectItem value="text-primary-navy">Granatowy</SelectItem>
                    <SelectItem value="text-primary-green">Zielony</SelectItem>
                    <SelectItem value="text-gray-900">Czarny</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="new-box-active"
                  checked={newBox.isActive || false}
                  onCheckedChange={checked => setNewBox({ ...newBox, isActive: !!checked })}
                />
                <Label htmlFor="new-box-active">Aktywny box</Label>
              </div>
              <Button onClick={handleAddBox} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Dodaj box
              </Button>
            </div>
          </div>

          {/* Existing boxes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Istniejące boxy ({statsSettings.boxes.length})
            </h3>
            {statsSettings.boxes.map((box, index) => (
              <div key={box.id} className="border rounded-lg p-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                    <div>
                      <h4 className="font-medium">Box {index + 1}</h4>
                      <p className="text-sm text-gray-500 truncate max-w-xs">{box.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateBox(box.id, { isActive: !box.isActive })}
                      className={box.isActive ? 'text-green-600' : 'text-gray-400'}
                    >
                      {box.isActive ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingBox(editingBox === box.id ? null : box.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteBox(box.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {editingBox === box.id && (
                  <div className="border-t pt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Tytuł boxu</Label>
                        <Input
                          value={box.title}
                          onChange={e => updateBox(box.id, { title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Ikona</Label>
                        <Select
                          value={box.icon}
                          onValueChange={value => updateBox(box.id, { icon: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="energy">Energia (błyskawica)</SelectItem>
                            <SelectItem value="heart">Serce (ochrona)</SelectItem>
                            <SelectItem value="leaf">Liść (natura)</SelectItem>
                            <SelectItem value="water">Woda (kropla)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>Opis boxu</Label>
                        <Textarea
                          value={box.description}
                          onChange={e => updateBox(box.id, { description: e.target.value })}
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Kolor tła ikony</Label>
                        <Select
                          value={box.backgroundColor}
                          onValueChange={value => updateBox(box.id, { backgroundColor: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bg-primary-green">Zielony</SelectItem>
                            <SelectItem value="bg-primary-lime">Limonkowy</SelectItem>
                            <SelectItem value="bg-primary-navy">Granatowy</SelectItem>
                            <SelectItem value="bg-primary-blue">Niebieski</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Kolor ikony</Label>
                        <Select
                          value={box.iconColor}
                          onValueChange={value => updateBox(box.id, { iconColor: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text-white">Biały</SelectItem>
                            <SelectItem value="text-primary-navy">Granatowy</SelectItem>
                            <SelectItem value="text-primary-green">Zielony</SelectItem>
                            <SelectItem value="text-gray-900">Czarny</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button onClick={handleSaveContent} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Zapisz ustawienia sekcji
          </Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
