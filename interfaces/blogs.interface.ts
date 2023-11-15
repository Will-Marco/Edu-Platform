export interface BlogsType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: Date;
  image: {
    url: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
  description: {
    text: string;
    html: string;
  };
}
