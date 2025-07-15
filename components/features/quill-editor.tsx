'use client';

import { TOOLBAR_ITEMS } from '@/constants/editor';
import { useToastEditor } from '@/hooks/use-toast-editor';
import { cn } from '@/lib/cn';
import { ToastEditorProps } from '@/types/admin/toast-editor';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), {
  loading: () => (
    <div className="border border-input rounded-md min-h-[300px] p-4 bg-background flex items-center justify-center text-muted-foreground">
      Loading editor...
    </div>
  ),
});
export default function ToastEditor({
  initialValue = '',
  placeholder = 'Wprowadź treść...',
  className,
  minHeight = '500px',
  mode = 'wysiwyg',
  disabled = false,
  onChange,
}: ToastEditorProps & { onChange?: (content: string) => void }) {
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
