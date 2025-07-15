export interface EditorInstance {
  getInstance(): {
    getHTML(): string;
    setHTML(html: string): void;
    getMarkdown(): string;
    setMarkdown(markdown: string): void;
  };
}
