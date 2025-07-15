export interface EditorInstance {
  getInstance(): {
    getHTML(): string;
    setHTML(html: string): void;
    getMarkdown(): string;
    setMarkdown(markdown: string): void;
  };
}

export interface ToastEditorProps {
  initialValue?: string;
  placeholder?: string;
  className?: string;
  minHeight?: string;
  mode?: 'wysiwyg' | 'markdown';
  disabled?: boolean;
}
