import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import QuillEditor from '@/components/features/quill-editor';

interface ContentTabProps {
  title: string;
  content: string;
  previewUrl: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export const ContentTab = ({
  title,
  content,
  previewUrl,
  onTitleChange,
  onContentChange,
}: ContentTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Treść strony</CardTitle>
        <CardDescription>Wprowadź podstawowe informacje o stronie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="page-title">Tytuł strony *</Label>
          <Input
            id="page-title"
            value={title}
            onChange={e => onTitleChange(e.target.value)}
            placeholder="Wprowadź tytuł strony"
            className="text-lg font-medium"
          />
          <p className="text-sm text-gray-500">URL: {previewUrl}</p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="page-content">Treść strony *</Label>
          <QuillEditor
            initialValue={content}
            onChange={onContentChange}
            placeholder="Wprowadź treść strony..."
            minHeight="500px"
          />
        </div>
      </CardContent>
    </Card>
  );
};
