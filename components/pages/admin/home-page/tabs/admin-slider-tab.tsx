import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { HeroSettings, HeroSlide } from '@/types/admin/admin-homepage';
import { Edit, Eye, EyeOff, GripVertical, ImageIcon, Plus, Trash2, X } from 'lucide-react';
import { useRef, useState } from 'react';

interface AdminSliderTabProps {
  heroSettings: HeroSettings;
  updateHeroSettings: (updates: Partial<HeroSettings>) => void;
  handleSaveHeroContent: () => void;
}

export function AdminSliderTab({ heroSettings, updateHeroSettings }: AdminSliderTabProps) {
  const [editingSlide, setEditingSlide] = useState<string | null>(null);
  const [newSlide, setNewSlide] = useState<Partial<HeroSlide>>({
    title: '',
    subtitle: '',
    buttonText: 'Dowiedz się więcej',
    buttonUrl: '/',
    isActive: true,
  });

  const slideImageRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const toggleSlider = () => {
    updateHeroSettings({ sliderEnabled: !heroSettings.sliderEnabled });
  };

  const addSlide = (slideData: Omit<HeroSlide, 'id'>) => {
    const newSlideWithId = {
      ...slideData,
      id: Date.now().toString(),
    } as HeroSlide;

    updateHeroSettings({
      slides: [...(heroSettings.slides || []), newSlideWithId],
    });
  };

  const updateSlide = (slideId: string, updates: Partial<HeroSlide>) => {
    updateHeroSettings({
      slides: (heroSettings.slides || []).map(slide =>
        slide.id === slideId ? { ...slide, ...updates } : slide
      ),
    });
  };

  const deleteSlide = (slideId: string) => {
    updateHeroSettings({
      slides: (heroSettings.slides || []).filter(slide => slide.id !== slideId),
    });
  };

  const handleAddSlide = () => {
    if (newSlide.title && newSlide.subtitle && newSlide.buttonText) {
      addSlide(newSlide as Omit<HeroSlide, 'id'>);
      setNewSlide({
        title: '',
        subtitle: '',
        buttonText: 'Dowiedz się więcej',
        buttonUrl: '/',
        isActive: true,
      });
    }
  };

  const handleDeleteSlide = (slideId: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten slajd?')) {
      deleteSlide(slideId);
    }
  };

  const handleSlideImageUpload = (slideId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      updateSlide(slideId, { image: imageUrl });
    }
  };

  const removeSlideImage = (slideId: string) => {
    updateSlide(slideId, { image: undefined });
  };

  return (
    <TabsContent value="slider" className="space-y-4 pt-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zarządzanie sliderem banerów</CardTitle>
              <CardDescription>Dodawaj, edytuj i zarządzaj slajdami w sekcji hero</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="slider-enabled" className="text-sm font-medium">
                Włącz slider
              </Label>
              <Switch
                id="slider-enabled"
                checked={heroSettings.sliderEnabled || false}
                onCheckedChange={toggleSlider}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add new slide form */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Dodaj nowy slajd
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tytuł slajdu</Label>
                <Textarea
                  value={newSlide.title || ''}
                  onChange={e => setNewSlide({ ...newSlide, title: e.target.value })}
                  placeholder="Wprowadź tytuł slajdu"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Opis slajdu</Label>
                <Textarea
                  value={newSlide.subtitle || ''}
                  onChange={e => setNewSlide({ ...newSlide, subtitle: e.target.value })}
                  placeholder="Wprowadź opis slajdu"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Tekst przycisku</Label>
                <Input
                  value={newSlide.buttonText || ''}
                  onChange={e => setNewSlide({ ...newSlide, buttonText: e.target.value })}
                  placeholder="Tekst przycisku CTA"
                />
              </div>
              <div className="space-y-2">
                <Label>Link przycisku</Label>
                <Input
                  value={newSlide.buttonUrl || ''}
                  onChange={e => setNewSlide({ ...newSlide, buttonUrl: e.target.value })}
                  placeholder="URL docelowy"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="new-slide-active"
                  checked={newSlide.isActive || false}
                  onCheckedChange={checked => setNewSlide({ ...newSlide, isActive: !!checked })}
                />
                <Label htmlFor="new-slide-active">Aktywny slajd</Label>
              </div>
              <Button onClick={handleAddSlide} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Dodaj slajd
              </Button>
            </div>
          </div>

          {/* Existing slides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Istniejące slajdy ({(heroSettings.slides || []).length})
            </h3>
            {(heroSettings.slides || []).map((slide, index) => (
              <div key={slide.id} className="border rounded-lg p-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                    <div>
                      <h4 className="font-medium">Slajd {index + 1}</h4>
                      <p className="text-sm text-gray-500 truncate max-w-xs">
                        {slide.title.replace(/<[^>]*>/g, '')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateSlide(slide.id, { isActive: !slide.isActive })}
                      className={slide.isActive ? 'text-green-600' : 'text-gray-400'}
                    >
                      {slide.isActive ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingSlide(editingSlide === slide.id ? null : slide.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteSlide(slide.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {editingSlide === slide.id && (
                  <div className="border-t pt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Tytuł slajdu</Label>
                        <Textarea
                          value={slide.title}
                          onChange={e => updateSlide(slide.id, { title: e.target.value })}
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Opis slajdu</Label>
                        <Textarea
                          value={slide.subtitle}
                          onChange={e => updateSlide(slide.id, { subtitle: e.target.value })}
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Tekst przycisku</Label>
                        <Input
                          value={slide.buttonText}
                          onChange={e => updateSlide(slide.id, { buttonText: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Link przycisku</Label>
                        <Input
                          value={slide.buttonUrl}
                          onChange={e => updateSlide(slide.id, { buttonUrl: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Slide image upload */}
                    <div className="space-y-2">
                      <Label>Obraz slajdu (opcjonalnie)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <input
                          type="file"
                          ref={el => {
                            slideImageRefs.current[slide.id] = el;
                          }}
                          onChange={e => handleSlideImageUpload(slide.id, e)}
                          accept="image/*"
                          className="hidden"
                        />
                        {slide.image ? (
                          <div className="space-y-2">
                            <img
                              src={slide.image}
                              alt="Slide preview"
                              className="max-w-full h-32 object-cover rounded mx-auto"
                            />
                            <div className="flex gap-2 justify-center">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => slideImageRefs.current[slide.id]?.click()}
                              >
                                <ImageIcon className="h-4 w-4 mr-2" />
                                Zmień
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeSlideImage(slide.id)}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Usuń
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => slideImageRefs.current[slide.id]?.click()}
                            >
                              <ImageIcon className="h-4 w-4 mr-2" />
                              Dodaj obraz
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
