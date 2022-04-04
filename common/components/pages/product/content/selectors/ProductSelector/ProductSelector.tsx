import { useState, useEffect, useReducer, useContext } from "react";

import { SelectionState } from "@/types/pages/product";
import { ReducerPayload } from "@/types/reducer";
import { Dispatch } from "react";
import { Type } from "@/types/pages/product";
import { SyntheticEvent } from "react";

import { useBasketContext } from "context/basketContext";

import ProductColorSelector from "@/components/pages/product/content/selectors/ProductColorSelector";
import ProductSizeSelector from "@/components/pages/product/content/selectors/ProductSizeSelector";
import ProductQuantitySelector from "@/components/pages/product/content/selectors/ProductQuantitiySelector";

interface SelectionProps {
  selection_state: SelectionState;
  selection_dispatch: Dispatch<ReducerPayload>;
}

const ProductSelector = ({
  SelectionProps,
  types,
}: {
  SelectionProps: SelectionProps;
  types: Type[];
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const { selection_state, selection_dispatch } = SelectionProps;
  const { title, price, color, size, quantity, success, available } =
    selection_state;

  const current_type = types.find((type: Type) => type.color.name === color);

  const { basket_state, basket_dispatch } = useBasketContext();

  useEffect(() => {
    setIsFormValid(color !== "" && size !== "" && quantity >= 1 ? true : false);

    if (size !== "" && quantity === 0) {
      selection_dispatch({
        type: "error",
        payload: "Ce produit n'est plus disponible",
      });
    } else {
      selection_dispatch({
        type: "reset_error",
        payload: null,
      });
    }
  }, [color, size, quantity, success]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    selection_dispatch({ type: "submit" });

    const product_title = "Manteau d'hiver isolé - Homme"; //à mettre dans le state et l'intialiser au chargement de la page

    const success_message = `Vous avez commandé ${
      selection_state.quantity === 1 ? "un" : selection_state.quantity
    } ${product_title} ${selection_state.color} en taille ${
      selection_state.size
    }`;

    if (isFormValid) {
      try {
        selection_dispatch({ type: "success" });
        basket_dispatch({
          type: "add_item",
          payload: {
            item: {
              title,
              price,
              quantity,
              size,
            },
          },
        });
      } catch (error) {
        selection_dispatch({ type: "error", payload: error });
      }
    } else {
      selection_dispatch({
        type: "error",
        payload: "Le formulaire n'est pas valide",
      });
    }
  };

  useEffect(() => {
    const last_item = basket_state.items[basket_state.items.length - 1];
    const message =
      basket_state.items.length >= 1
        ? `A new item has been added to your basket: title: ${last_item.title}, size: ${last_item.size}, quantity: ${last_item.quantity}, price: ${last_item.price}`
        : null;

    message && console.log(message);
  }, [basket_state]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-100 d-flex flex-column gap-4 justify-content-start align-items-start"
    >
      <ProductColorSelector {...SelectionProps} types={types} />
      {current_type ? (
        <>
          <ProductSizeSelector
            {...SelectionProps}
            current_type={current_type}
          />
          <ProductQuantitySelector
            {...SelectionProps}
            current_type={current_type}
          />{" "}
        </>
      ) : (
        <span>please select a color</span>
      )}
      <button className="btn btn-dark text-uppercase" type="submit">
        Ajouter au panier
      </button>
      <span className="text-danger"> {selection_state.error}</span>
      <span className="text-success">
        {success && "Votre selection a été ajoutée au panier"}
      </span>
    </form>
  );
};

export default ProductSelector;
