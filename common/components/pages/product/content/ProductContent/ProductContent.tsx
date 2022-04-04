import { useEffect, useReducer } from "react";

import { ProductData } from "@/types/pages/product";

import BootStrapRow from "@/utils/BootStrapRow";

import ProductImage from "@/components/pages/product/image/ProductImage";
import ProductInfo from "@/components/pages/product/content/ProductInfo";
import {
  initialState,
  selectionReducer,
} from "@/components/pages/product/selectionReducer";

const ProductContent = ({ product }: { product: ProductData }) => {
  const { types } = product;

  const [selection_state, selection_dispatch] = useReducer(
    selectionReducer,
    initialState
  );

  const SelectionProps = {
    selection_state,
    selection_dispatch,
  };

  useEffect(() => {
    selection_dispatch({
      type: "init",
      payload: { title: product.title, price: product.price },
    });
  }, [selection_state.color, selection_state.size, selection_state.quantity]);

  return (
    <section>
      <BootStrapRow>
        {types && <ProductImage {...SelectionProps} types={types} />}
        {product && (
          <ProductInfo SelectionProps={SelectionProps} product={product} />
        )}
      </BootStrapRow>
    </section>
  );
};

export default ProductContent;
