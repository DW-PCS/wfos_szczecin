'use client';

import { TOOLBAR_ITEMS } from '@/constants/editor';
import { useToastEditor } from '@/hooks/use-toast-editor';
import { cn } from '@/lib/cn';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className="border border-input rounded-md min-h-[300px] p-4 bg-background flex items-center justify-center text-muted-foreground">
      Loading editor...
    </div>
  ),
});

export interface ToastEditorProps {
  initialValue?: string;
  placeholder?: string;
  className?: string;
  minHeight?: string;
  mode?: 'wysiwyg' | 'markdown';
  disabled?: boolean;
  onChange?: (content: string) => void;
}

export default function ToastEditor({
  initialValue = '',
  placeholder = 'Wprowadź treść...',
  className,
  minHeight = '500px',
  mode = 'wysiwyg',
  disabled = false,
  onChange,
}: ToastEditorProps) {
  const { content, editorRef, handleChange } = useToastEditor({
    initialValue,
    disabled,
    onChange,
  });

  return (
    <div className={cn('toastEditor', className)}>
      <Editor
        ref={editorRef}
        initialValue={content}
        previewStyle="vertical"
        height={minHeight}
        initialEditType={mode}
        useCommandShortcut
        onChange={handleChange}
        toolbarItems={TOOLBAR_ITEMS}
        placeholder={placeholder}
        autofocus={false}
        hideModeSwitch={false}
      />
    </div>
  );
}
