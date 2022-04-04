import { useState, useEffect, Dispatch } from "react";

import ProductStyles from "@/styles/components/pages/product/Product.module.scss";

import { SelectionState, Type } from "@/types/pages/product";
import { ReducerPayload } from "@/types/reducer";

const ProductSizeSelector = ({
  selection_state,
  selection_dispatch,
  current_type,
}: {
  selection_state: SelectionState;
  selection_dispatch: Dispatch<ReducerPayload>;
  current_type: Type;
}) => {
  return (
    <div>
      <h6>
        Taile: <span className="text-uppercase">{selection_state.size}</span>
      </h6>
      <div className="d-flex flex-row justify-content-start align-items-center gap-2">
        {current_type.stock.map(({ quantity, size }, index) => {
          return (
            <SizeSelectorBox
              key={index}
              quantity={quantity}
              size={size}
              selection_state={selection_state}
              selection_dispatch={selection_dispatch}
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
  selection_state,
  selection_dispatch,
}: {
  quantity: number;
  size: string;
  selection_state: SelectionState;
  selection_dispatch: Dispatch<ReducerPayload>;
}) => {
  const [selected, setSelected] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setSelected(size === selection_state.size);
    setAvailable(quantity >= 1 ? true : false);
  }, [selection_state]);

  return (
    <div
      onClick={() => {
        selection_dispatch({ type: "update_size", payload: size });
      }}
      className={`${ProductStyles.box} ${ProductStyles.size_box} ${
        selected && ProductStyles.selected
      }  ${!available && ProductStyles.unavailable}`}
    >
      <span>{size}</span>
    </div>
  );
};
