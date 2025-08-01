interface EditorBlock {
  data?: {
    text?: string;
    message?: string;
  };
}

interface EditorContent {
  blocks: EditorBlock[];
}

type ContentInput = string | EditorContent | null | undefined;

export const processContentToHtml = (content: ContentInput): string => {
  if (typeof content === 'string') {
    if (content.includes('<') && content.includes('>')) {
      return content;
    }
    return content ? `<p>${content.replace(/\n/g, '</p><p>')}</p>` : '';
  }

  if (content && typeof content === 'object' && 'blocks' in content) {
    const textContent = content.blocks
      .map(block => block.data?.text || block.data?.message || '')
      .filter(Boolean)
      .join('</p><p>');
    return textContent ? `<p>${textContent}</p>` : '';
  }

  return '';
};
