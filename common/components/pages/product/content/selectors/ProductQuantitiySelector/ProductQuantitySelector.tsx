import { useState, useEffect } from "react";

import {
  SelectionReducerPayload,
  SelectionState,
  Type,
  Stock,
} from "@/types/pages/product";
import { Dispatch } from "react";

import ProductStyles from "@/styles/components/pages/product/Product.module.scss";

const ProductQuantitySelector = ({
  selection_state,
  selection_dispatch,
  current_type,
}: {
  selection_state: SelectionState;
  selection_dispatch: Dispatch<SelectionReducerPayload>;
  current_type: Type;
}) => {
  //If it is possible to choose a quantity
  const { available } = selection_state;

  //The available quantity and size for the current stock selected
  const [inventory, setInventory] = useState({ size: "", quantity: 0 });

  //get the current inventory selected (with the size and the quantity)
  useEffect(() => {
    current_type &&
      setInventory(
        current_type.stock.find(
          (stock) => stock.size === selection_state.size
        ) || inventory
      );
    console.log(inventory);
  }, [selection_state]);

  //update the availability of the selection based on the size and the quantity of the current inventory
  useEffect(() => {
    selection_dispatch({
      type: "update_available",
      payload: inventory.size !== "" && inventory.quantity > 0,
    });
  }, [inventory]);

  useEffect(() => {
    selection_dispatch({ type: "reset_quantity", payload: null });
  }, [selection_state.color, selection_state.size]);

  return (
    <div>
      {available ? (
        <>
          <h6>Quantité</h6>
          <div className="d-flex flex-row justify-content-start align-items-center gap-2">
            <div
              className={`${ProductStyles.box} ${ProductStyles.qty_button} ${
                selection_state.quantity > 1 && ProductStyles.selectable
              }`}
              onClick={() =>
                available &&
                selection_dispatch({
                  type: "update_quantity",
                  payload: { amount: -1, inventory: inventory.quantity },
                })
              }
            >
              <span>-</span>
            </div>
            <div className={` ${ProductStyles.qty_box}`}>
              <span>{selection_state.quantity}</span>
            </div>
            <div
              onClick={() =>
                available &&
                selection_dispatch({
                  type: "update_quantity",
                  payload: { amount: 1, inventory: inventory.quantity },
                })
              }
              className={`${ProductStyles.box} ${ProductStyles.qty_button} ${
                selection_state.quantity !== inventory.quantity &&
                ProductStyles.selectable
              }`}
            >
              <span>+</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Veuillez selectionner une taille disponible</span>
        </>
      )}
    </div>
  );
};

export default ProductQuantitySelector;
