'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImageIcon, X } from 'lucide-react';
import { useRef, useState } from 'react';

interface NewsImageUploadProps {
  imageUrl: string;
  onImageChange: (imageUrl: string) => void;
}

export function NewsImageUpload({ imageUrl, onImageChange }: NewsImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      setIsUploading(true);
      try {
        console.log('Uploading file:', file);
      } catch (error) {
        console.error('Upload error:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="grid gap-2">
      <Label>Zdjęcie główne</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">
          Przeciągnij zdjęcie główne tutaj lub kliknij aby wybrać
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          {isUploading ? 'Przesyłanie...' : 'Wybierz zdjęcie'}
        </Button>
        {imageUrl && (
          <div className="mt-4 p-2 bg-gray-50 rounded flex items-center justify-between">
            <span className="text-sm">{imageUrl}</span>
            <Button type="button" variant="ghost" size="sm" onClick={() => onImageChange('')}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
