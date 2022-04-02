import ProductStyles from "@/styles/components/pages/product/Product.module.scss";
import {
  ProductState,
  ProductReducerPayload,
  Type,
} from "@/types/pages/product";
import { Dispatch } from "react";

const ProductColorSelector = ({
  product_state,
  product_dispatch,
  types,
}: {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
  types: Type[];
}) => {
  return (
    <div>
      <h6>
        Couleur: <span className="text-uppercase">{product_state.color}</span>
      </h6>
      <div className="d-flex flex-row justify-content-start align-items-center gap-2">
        {types.map((type, index) => {
          const selected = product_state.color === type.color.name;

          return (
            <div
              key={index}
              onClick={() => {
                product_dispatch({
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
