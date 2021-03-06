import type { SelectionState } from "@/types/pages/product";
import type { ReducerPayload } from "@/types/reducer";

export const selectionReducer = (
  state: SelectionState,
  { type, payload }: ReducerPayload
) => {
  const { image_number: number, quantity } = state;

  switch (type) {
    case "init": {
      return { ...state, title: payload.title, price: payload.price.current };
    }

    case "next_image": {
      let updatedvalue: number;

      if (number + 1 === payload) {
        updatedvalue = 0;
      } else {
        updatedvalue = number + 1;
      }

      return { ...state, image_number: updatedvalue };
    }

    case "previous_image": {
      let updatedvalue;
      if (number - 1 === 0) {
        updatedvalue = 0;
      } else if (number - 1 < 0) {
        updatedvalue = payload - 1;
      } else {
        updatedvalue = number - 1;
      }

      return { ...state, image_number: updatedvalue };
    }

    case "set_image": {
      return { ...state, image_number: payload };
    }

    case "update_color": {
      return { ...state, color: payload };
    }

    case "update_size": {
      return { ...state, size: payload };
    }

    case "update_quantity": {
      if (payload.amount === -1) {
        if (quantity === 1) {
          return { ...state };
        } else return { ...state, quantity: quantity - 1 };
      } else if (payload.amount === 1) {
        if (payload.inventory <= quantity) {
          return { ...state };
        } else {
          return { ...state, quantity: quantity + 1 };
        }
      }

      return { ...state, quantity: payload };
    }

    case "update_available": {
      return { ...state, available: payload };
    }

    case "reset_quantity": {
      return { ...state, quantity: payload };
    }

    case "submit": {
      return { ...state, loading: true, submitted: true };
    }

    case "error": {
      return { ...state, error: payload, loading: false, submitted: false };
    }

    case "reset_error": {
      return { ...state, error: "" };
    }

    case "success": {
      return { ...initialState, success: true };
    }

    case "reset": {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export const initialState: SelectionState = {
  title: "",
  price: 0,
  color: "khaki",
  image_number: 0,
  size: "",
  quantity: 0,
  available: false,
  submitted: false,
  loading: false,
  success: false,
  error: "",
};
