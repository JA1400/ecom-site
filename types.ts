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

/**********************************************/

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  changeQuantity: (id: string, delta: number) => void;
  totalItems: number;
}
