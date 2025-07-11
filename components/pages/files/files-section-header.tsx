import { iconMap } from '@/constants/files';
import { FileCategory } from '@/types/file';
import { File } from 'lucide-react';

interface FilesSectionHeaderProps {
  section: FileCategory;
  filesCount: number;
}

export function FilesSectionHeader({ section, filesCount }: FilesSectionHeaderProps) {
  const IconComponent = iconMap[section.icon as keyof typeof iconMap] || File;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary-green" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary-navy">{section.title}</h2>
          <p className="text-gray-600">
            {filesCount} {filesCount === 1 ? 'dostępny plik' : 'dostępnych plików'}
          </p>
          {section.description && (
            <p className="text-gray-500 text-sm mt-1">{section.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
