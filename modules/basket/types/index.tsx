interface Item {
  title: string;
  quantity: number;
  size: string;
  price: number;
}

interface BasketState {
  items: Item[];
  total: number;
}

export type { BasketState, Item };
