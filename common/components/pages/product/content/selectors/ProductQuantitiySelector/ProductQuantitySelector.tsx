import { useState, useEffect } from "react";

import {
  ProductReducerPayload,
  ProductState,
  Type,
} from "@/types/pages/product";
import { Dispatch } from "react";

import ProductStyles from "@/styles/components/pages/product/Product.module.scss";

const ProductQuantitySelector = ({
  product_state,
  product_dispatch,
  current_type,
}: {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
  current_type: Type;
}) => {
  const [available, setAvailable] = useState(false);
  const [inventory, setInventory] = useState(0);

  useEffect(() => {
    setAvailable(product_state.size && product_state.size !== 0 ? true : false);

    const current_stock = current_type?.stock.find(
      (stock) => stock.size === product_state.size
    );

    current_stock?.quantity && setInventory(current_stock.quantity);
  }, [product_state]);

  useEffect(() => {
    product_dispatch({ type: "reset_quantity", payload: null });
  }, [product_state.color, product_state.size]);

  return (
    <div>
      {available ? (
        <>
          <h6>Quantité</h6>
          <div className="d-flex flex-row justify-content-start align-items-center gap-2">
            <div
              className={`${ProductStyles.box} ${ProductStyles.qty_button} ${
                product_state.quantity > 1 && ProductStyles.selectable
              }`}
              onClick={() =>
                product_dispatch({
                  type: "update_quantity",
                  payload: { amount: -1, inventory },
                })
              }
            >
              <span>-</span>
            </div>
            <div className={` ${ProductStyles.qty_box}`}>
              <span>{product_state.quantity}</span>
            </div>
            <div
              onClick={() =>
                product_dispatch({
                  type: "update_quantity",
                  payload: { amount: 1, inventory },
                })
              }
              className={`${ProductStyles.box} ${ProductStyles.qty_button} ${
                product_state.quantity !== inventory && ProductStyles.selectable
              }`}
            >
              <span>+</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Veuillez selectionner un produit disponible</span>
        </>
      )}
    </div>
  );
};

export default ProductQuantitySelector;
