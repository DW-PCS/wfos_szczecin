import { useCallback, useEffect, useRef, useState } from 'react';

interface EditorInstance {
  getHTML: () => string;
  setHTML: (content: string) => void;
}

interface EditorRef {
  getInstance?: () => EditorInstance | null;
  getHTML?: () => string;
  setHTML?: (content: string) => void;
}

interface UseEditorProps {
  initialValue?: string;
  disabled?: boolean;
  onChange?: (content: string) => void;
}

export function useEditor({ initialValue = '', disabled = false, onChange }: UseEditorProps = {}) {
  const [content, setContent] = useState<string>(initialValue);
  const editorRef = useRef<any | null>(null);
  const isInitialMount = useRef(true);

  const getEditorInstance = useCallback((): EditorInstance | null => {
    if (!editorRef.current) return null;

    if (typeof editorRef.current.getInstance === 'function') {
      return editorRef.current.getInstance();
    }

    if (editorRef.current.getHTML && editorRef.current.setHTML) {
      return editorRef.current as EditorInstance;
    }

    return null;
  }, []);

  const handleChange = useCallback(() => {
    if (disabled) return;

    const instance = getEditorInstance();
    if (!instance) return;

    try {
      const htmlContent = instance.getHTML();
      setContent(htmlContent);
      onChange?.(htmlContent);
    } catch (error) {
      console.error('Error getting editor content:', error);
    }
  }, [disabled, onChange, getEditorInstance]);

  const setEditorContent = useCallback(
    (newContent: string) => {
      const instance = getEditorInstance();
      if (!instance) return;

      try {
        const currentContent = instance.getHTML();
        if (currentContent !== newContent) {
          instance.setHTML(newContent);
        }
      } catch (error) {
        console.error('Error setting editor content:', error);
      }
    },
    [getEditorInstance]
  );

  const getContent = useCallback((): string => {
    const instance = getEditorInstance();
    if (!instance) return '';

    try {
      return instance.getHTML();
    } catch (error) {
      console.error('Error getting content:', error);
      return '';
    }
  }, [getEditorInstance]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setEditorContent(content);
  }, [content, setEditorContent]);

  return {
    content,
    setContent,
    editorRef,
    handleChange,
    getContent,
    setEditorContent,
  };
}
