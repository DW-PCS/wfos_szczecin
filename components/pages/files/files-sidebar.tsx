import { iconMap } from '@/constants/files';
import { FileCategory, FileItem } from '@/types/file';
import { File } from 'lucide-react';

interface FilesSidebarProps {
  categories: FileCategory[];
  activeSection: string;
  getFilesByCategory: (categoryId: string) => FileItem[];
  onSectionChange: (sectionId: string) => void;
}

export function FilesSidebar({
  categories,
  activeSection,
  getFilesByCategory,
  onSectionChange,
}: FilesSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-20">
        <h3 className="text-lg font-bold text-primary-navy mb-6">Kategorie plików</h3>
        <nav className="space-y-2">
          {categories.map(section => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap] || File;
            const filesCount = getFilesByCategory(section.id).length;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center justify-between space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary-green text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-green'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{section.title}</span>
                </div>
                <span className="text-xs opacity-75">({filesCount})</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
