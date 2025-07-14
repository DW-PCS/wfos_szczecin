interface ArticleContentProps {
  content: string;
  className?: string;
}

export const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <section className="pb-12">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="prose sm:prose-lg max-w-none text-black prose-headings:text-black prose-a:text-primary-green hover:prose-a:text-primary-green/80"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </section>
);
