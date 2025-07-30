import { EditorInstance } from '@/types/admin/toast-editor';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseQuillEditorProps {
  initialValue?: string;
  disabled?: boolean;
  onChange?: (content: string) => void;
}

export function useQuillEditor({
  initialValue = '',
  disabled = false,
  onChange,
}: UseQuillEditorProps = {}) {
  const [content, setContent] = useState<string>(initialValue);
  const editorRef = useRef<EditorInstance>(null);
  const isInitialMount = useRef(true);

  const handleChange = useCallback(() => {
    if (!editorRef.current || disabled) return;

    const editorInstance = editorRef.current.getInstance();
    if (!editorInstance) return;

    const htmlContent = editorInstance.getHTML();
    setContent(htmlContent);
    onChange?.(htmlContent);
  }, [disabled, onChange]);

  const setEditorContent = useCallback((newContent: string) => {
    if (!editorRef.current) return;

    const editorInstance = editorRef.current.getInstance();
    if (!editorInstance) return;

    const currentContent = editorInstance.getHTML();
    if (currentContent !== newContent) {
      editorInstance.setHTML(newContent);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setEditorContent(content);
  }, [content, setEditorContent]);

  const getContent = useCallback(() => {
    if (!editorRef.current) return '';
    const editorInstance = editorRef.current.getInstance();
    return editorInstance?.getHTML() || '';
  }, []);

  return {
    content,
    setContent,
    editorRef,
    handleChange,
    getContent,
    setEditorContent,
  };
}
