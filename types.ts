export type Slide = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
};

export type CategoryType = {
  variant: "home" | "shop"; // 👈 these are your two modes
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // optional if you want thumbnails
};

export type Image = {
  id: string;
  url: string;
  alt?: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  images: Image[];
  catergory: string;
};

export type ProductsContextType = {
  products: Product[];
  loading: boolean;
  reload: () => void;
};
