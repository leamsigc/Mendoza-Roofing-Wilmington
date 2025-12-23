export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML string
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Hammer' | 'Shield' | 'Home' | 'ClipboardCheck';
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark';

export interface Translation {
  [key: string]: {
    en: string;
    es: string;
  }
}
