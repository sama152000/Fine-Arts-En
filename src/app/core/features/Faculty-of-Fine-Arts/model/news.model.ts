export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishDate: Date;
  author?: string;
  category: 'news' | 'announcement' | 'achievement';
  readMoreUrl: string;
  featured?: boolean;
}