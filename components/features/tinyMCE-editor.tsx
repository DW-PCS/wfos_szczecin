'use client';

import { useEditor } from '@/hooks/use-editor';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  initialValue?: string;
  onEditorChange?: (content: string) => void;
  height?: number;
}

export default function TinyMCEEditor({
  initialValue = '',
  onEditorChange,
  height = 400,
}: TinyMCEEditorProps) {
  const { content, editorRef, handleChange } = useEditor({
    initialValue,
    onChange: onEditorChange,
    disabled: false,
  });
  console.log(content, 'content from TinyMCEEditor');
  return (
    <Editor
      apiKey="gb4sl43mtq7izw3fv49nripd2kzqm3k1ye7xsznh1ltqg3ko"
      ref={editorRef}
      initialValue={initialValue}
      init={{
        height,
        skin: 'oxide',
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.css',
        theme: 'silver',

        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
        ],

        toolbar:
          'undo redo | formatselect | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',

        content_style: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            margin: 1rem;
          }
        `,

        body_class: 'tiny-body',
        branding: false,
        automatic_uploads: false,

        setup: editor => {
          editor.on('init', () => {
            console.log('TinyMCE Editor initialized');
          });
        },
      }}
      onEditorChange={handleChange}
    />
  );
}
