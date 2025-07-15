import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface SeoTabProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  previewUrl: string;
  onMetaTitleChange: (metaTitle: string) => void;
  onMetaDescriptionChange: (metaDescription: string) => void;
}

export const SeoTab = ({
  title,
  metaTitle,
  metaDescription,
  previewUrl,
  onMetaTitleChange,
  onMetaDescriptionChange,
}: SeoTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Optymalizacja SEO</CardTitle>
        <CardDescription>Ustawienia meta tagów dla wyszukiwarek</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="meta-title">Meta tytuł</Label>
          <Input
            id="meta-title"
            value={metaTitle}
            onChange={e => onMetaTitleChange(e.target.value)}
            placeholder="Wprowadź meta tytuł (zalecane: 50-60 znaków)"
            maxLength={60}
          />
          <p className="text-xs text-gray-500">{metaTitle.length}/60 znaków</p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="meta-description">Meta opis</Label>
          <Textarea
            id="meta-description"
            value={metaDescription}
            onChange={e => onMetaDescriptionChange(e.target.value)}
            placeholder="Wprowadź meta opis (zalecane: 150-160 znaków)"
            rows={3}
            maxLength={160}
          />
          <p className="text-xs text-gray-500">{metaDescription.length}/160 znaków</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Podgląd w wyszukiwarce:</h4>
          <div className="space-y-1">
            <div className="text-blue-600 text-sm hover:underline cursor-pointer">
              {metaTitle || title || 'Tytuł strony'}
            </div>
            <div className="text-green-700 text-xs">{`${
              typeof window !== 'undefined' ? window.location.origin : ''
            }${previewUrl}`}</div>
            <div className="text-gray-600 text-sm">
              {metaDescription || 'Opis strony będzie wyświetlany tutaj...'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
