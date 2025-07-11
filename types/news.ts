export type Article = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: Date;
  image?: string;
  featured: boolean;
  readTime: string;
};
