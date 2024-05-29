export interface IProduct {
  id?: string | undefined;
  imageLink: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageLink: string;
  };
}
