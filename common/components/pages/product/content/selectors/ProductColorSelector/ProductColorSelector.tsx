import ProductStyles from "@/styles/components/pages/product/Product.module.scss";

import { SelectionState, Type } from "@/types/pages/product";
import { ReducerPayload } from "@/types/reducer";
import { Dispatch } from "react";

const ProductColorSelector = ({
  selection_state,
  selection_dispatch,
  types,
}: {
  selection_state: SelectionState;
  selection_dispatch: Dispatch<ReducerPayload>;
  types: Type[];
}) => {
  return (
    <div>
      <h6>
        Couleur: <span className="text-uppercase">{selection_state.color}</span>
      </h6>
      <div className="d-flex flex-row justify-content-start align-items-center gap-2">
        {types.map((type, index) => {
          const selected = selection_state.color === type.color.name;

          return (
            <div
              key={index}
              onClick={() => {
                selection_dispatch({
                  type: "update_color",
                  payload: type.color.name,
                });
              }}
              className={`${ProductStyles.box} ${ProductStyles.color_box} ${
                selected && ProductStyles.selected
              }`}
              style={{ backgroundColor: type.color.hex }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColorSelector;
