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
