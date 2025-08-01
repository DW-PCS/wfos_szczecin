export const processContentToHtml = (content: unknown): string => {
  if (typeof content === 'string') {
    if (content.includes('<') && content.includes('>')) {
      return content;
    }

    return content ? `<p>${content.replace(/\n/g, '</p><p>')}</p>` : '';
  }

  if (content && typeof content === 'object' && 'blocks' in content) {
    const textContent = (content.blocks as unknown[])
      .map((block: any) => block.data?.text || block.data?.message || '')
      .filter(Boolean)
      .join('</p><p>');
    return textContent ? `<p>${textContent}</p>` : '';
  }

  return '';
};
