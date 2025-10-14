export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  body: string;
};

export type StrapiProp<T> = {
  data: T[];
};

export type StrapiProjects = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    format: {
      thumbnail?: { url: string };
      small?: { url: string };
      large?: { url: string };
      medium?: { url: string };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};
export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  image?: {
    url: string;
    format: {
      thumbnail?: { url: string };
      small?: { url: string };
      large?: { url: string };
      medium?: { url: string };
    };
  };
};
