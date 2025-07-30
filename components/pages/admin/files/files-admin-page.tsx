'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileCategory, FileItem } from '@/types/file';
import { useState } from 'react';

import { AddCategoryDialog } from './add-category-dialog';
import { AddFileDialog } from './add-file-dialog';

import { useCategoryOperations } from '@/hooks/use-category-options';
import { useFileOperations } from '@/hooks/use-file-options';
import { FilesHeader } from './files-header';
import { FilesStats } from './files-stats';
import { CategoriesTab } from './tabs/category-tab';
import { FilesTab } from './tabs/files-tab';

interface FilesViewProps {
  categories: FileCategory[];
  files: FileItem[];
}

export default function FilesView({ categories, files }: FilesViewProps) {
  const [activeTab, setActiveTab] = useState('files');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const {
    isAddCategoryOpen,
    setIsAddCategoryOpen,
    editingCategory,
    categoryForm,

    handleCategorySubmit,
    handleEditCategory,
    handleDeleteCategory,
    handleAddCategory,
    handleCategoryFormChange,
  } = useCategoryOperations(categories);

  const {
    isAddFileOpen,
    setIsAddFileOpen,
    editingFile,
    fileForm,
    fileInputRef,
    isUploading,
    handleFileSubmit,
    handleEditFile,
    handleDeleteFile,
    handleDownloadFile,
    handleAddFile,
    handleFileFormChange,
    handleFileUpload,
    formatFileSize,
  } = useFileOperations(categories);

  const filteredFiles = files.filter(file => {
    const matchesCategory = selectedCategory === 'all' || file.categoryId === selectedCategory;
    const matchesSearch =
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getFilesByCategory = (categoryId: string) =>
    files.filter(file => file.categoryId === categoryId);

  return (
    <div className="space-y-6">
      <FilesHeader onAddCategory={handleAddCategory} onAddFile={handleAddFile} />

      <FilesStats
        categoriesCount={categories.length}
        filesCount={files.length}
        filteredFilesCount={filteredFiles.length}
        searchQuery={searchQuery}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="files">Pliki</TabsTrigger>
          <TabsTrigger value="categories">Kategorie</TabsTrigger>
        </TabsList>

        <TabsContent value="files" className="space-y-6">
          <FilesTab
            files={filteredFiles}
            categories={categories}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onDownloadFile={handleDownloadFile}
            onEditFile={handleEditFile}
            onDeleteFile={handleDeleteFile}
          />
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <CategoriesTab
            categories={categories}
            getFilesByCategory={getFilesByCategory}
            onEditCategory={handleEditCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        </TabsContent>
      </Tabs>

      <AddCategoryDialog
        isOpen={isAddCategoryOpen}
        onOpenChange={setIsAddCategoryOpen}
        categoryForm={categoryForm}
        onCategoryFormChange={handleCategoryFormChange}
        onSubmit={handleCategorySubmit}
        editingCategory={editingCategory}
      />

      <AddFileDialog
        isOpen={isAddFileOpen}
        onOpenChange={setIsAddFileOpen}
        fileForm={fileForm}
        onFileFormChange={handleFileFormChange}
        onFileUpload={handleFileUpload}
        onSubmit={handleFileSubmit}
        categories={categories}
        fileInputRef={fileInputRef}
        formatFileSize={formatFileSize}
        isUploading={isUploading}
        editingFile={editingFile}
      />
    </div>
  );
}
