import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  content: string;
  className?: string;
}

export const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <section className="pb-12">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <ReactMarkdown
          components={{
            a: ({ href, children, ...props }) => (
              <a
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
              </a>
            ),
            img: ({ src, alt, ...props }) => (
              <img src={src} alt={alt} loading="lazy" className="rounded-lg" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  </section>
);
