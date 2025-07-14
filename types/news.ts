export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  category: string;
  tags?: string[];
  author: string;
  published: boolean;
  publishedAt?: string;
  featured: boolean;
  readTime?: string;
  createdAt: string;
  updatedAt: string;
}
