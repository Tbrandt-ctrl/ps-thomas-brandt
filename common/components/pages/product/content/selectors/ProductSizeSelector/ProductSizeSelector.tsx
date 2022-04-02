import { useState, useEffect, Dispatch } from "react";

import ProductStyles from "@/styles/components/pages/product/Product.module.scss";
import {
  ProductReducerPayload,
  ProductState,
  Type,
} from "@/types/pages/product";

const ProductSizeSelector = ({
  product_state,
  product_dispatch,
  current_type,
}: {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
  current_type: Type;
}) => {
  return (
    <div>
      <h6>
        Taile: <span className="text-uppercase">{product_state.size}</span>
      </h6>
      <div className="d-flex flex-row justify-content-start align-items-center gap-2">
        {current_type.stock.map(({ quantity, size }, index) => {
          return (
            <SizeSelectorBox
              key={index}
              quantity={quantity}
              size={size}
              product_state={product_state}
              product_dispatch={product_dispatch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductSizeSelector;

const SizeSelectorBox = ({
  quantity,
  size,
  product_state,
  product_dispatch,
}: {
  quantity: number;
  size: number;
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
}) => {
  const [selected, setSelected] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setSelected(size === product_state.size);
    setAvailable(quantity >= 1 ? true : false);
  }, [product_state]);

  useEffect(() => {
    if (selected && !available) {
      product_dispatch({ type: "update_size", payload: null });
    }
  }, [selected, available]);

  return (
    <div
      onClick={() => {
        available && product_dispatch({ type: "update_size", payload: size });
      }}
      className={`${ProductStyles.box} ${ProductStyles.size_box} ${
        selected && ProductStyles.selected
      }  ${!available && ProductStyles.unavailable}`}
    >
      <span>{size}</span>
    </div>
  );
};
