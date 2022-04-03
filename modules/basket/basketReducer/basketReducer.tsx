import type { BasketState } from "../types";
import type { ReducerPayload } from "@/types/reducer";

export const basketReducer = (
  state: BasketState,
  { type, payload }: ReducerPayload
) => {
  switch (type) {
    case "add_item":
      const new_items = [...state.items, payload.item];
      return {
        ...state,
        items: new_items,
      };

    default:
      return state;
  }
};

export const initialState: BasketState = {
  items: [],
  total: 0,
};
