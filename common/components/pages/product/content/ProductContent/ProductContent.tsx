import { useReducer } from "react";

import { ProductData } from "@/types/pages/product";

import BootStrapRow from "@/utils/BootStrapRow";

import ProductImage from "@/components/pages/product/image/ProductImage";
import ProductInfo from "@/components/pages/product/content/ProductInfo";
import {
  initialState,
  productReducer,
} from "@/components/pages/product/productReducer";

const ProductContent = ({ product }: { product: ProductData }) => {
  const { types } = product;

  const [product_state, product_dispatch] = useReducer(
    productReducer,
    initialState
  );

  const productProps = {
    product_state,
    product_dispatch,
  };

  return (
    <section>
      <BootStrapRow>
        {types && <ProductImage {...productProps} types={types} />}
        <ProductInfo productProps={productProps} product={product} />
      </BootStrapRow>
    </section>
  );
};

export default ProductContent;
