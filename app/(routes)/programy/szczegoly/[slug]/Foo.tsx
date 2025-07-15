'use client';
import QuillEditor from '@/components/features/quill-editor';
import { initialProgramPages } from '@/constants/program';
import { getPageBySlug } from '@/lib/utils/programs';
import { processContentToHtml } from '@/lib/utils/quill-editor-helpers';

const Foo = ({ slug }: { slug: string }) => {
  const program = getPageBySlug({ slug, programs: initialProgramPages });
  const initialContent = processContentToHtml(program?.content);

  return (
    <div>
      <QuillEditor initialValue={initialContent} placeholder="Wprowadź treść strony..." />
    </div>
  );
};

export default Foo;
