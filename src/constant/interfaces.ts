export interface MenuInterface {
  id: string;
  label: string;
  route: string;
}

export interface ContactInterface {
  id: string;
  icon: React.ReactNode;
  label: string;
  url: string;
}
export interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
}

export interface TagInterface {
  id: string;
  label: string;
}

export interface ImageInterface {
  id: string;
  url: string;
}

export interface InformationItemInterface {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface BlogInterface {
  id: string;
  slug: string;
  banner: string;
  title: string;
  date: string;
  description: string;
  content: any;
  tags: TagInterface[];
  categoryIDs: string[];
}

export interface ProjectInterface {
  id: string;
  slug: string;
  banner: string;
  title: string;
  website: string;
  date: string;
  services: string;
  description: string;
  content: any;
  tags: TagInterface[];
}

export interface TemplateInterface {
  id: string;
  slug: string;
  banner: string;
  title: string;
  price: string;
  website: string;
  description: string;
  content: any;
  services: string[];
  pages: string[];
  category: string;
}

export interface FeedbackInterface {
  id: string;
  image: string;
  avatar: string;
  content: string;
  postID: string;
}
