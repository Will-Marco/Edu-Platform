export interface BlogsType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
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
}
