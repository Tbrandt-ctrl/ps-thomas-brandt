interface Image {
  link: string;
  alt: string;
}

interface Stock {
  size: string;
  quantity: number;
}

interface Color {
  name: string;
  hex: string;
}

interface Type {
  color: Color;
  images: Image[];
  stock: Stock[];
}

interface Brand {
  name: string;
  logo: string;
}

interface Price {
  current: string;
  sale: boolean;
  start: string;
}

interface ProductData {
  id: string;
  slug: string;
  title: string;
  brand: Brand;
  price: Price;
  ref: string;
  types: Type[];
}

interface SelectionState {
  title: string;
  price: number;
  color: string;
  image_number: number;
  size: string;
  available: boolean;
  quantity: number;
  submitted: boolean;
  loading: boolean;
  success: boolean;
  error: String;
}

export type { ProductData, SelectionState, Type, Image, Stock };
