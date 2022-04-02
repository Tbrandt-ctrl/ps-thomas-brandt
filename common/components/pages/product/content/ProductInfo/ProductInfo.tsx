import ProductSelector from "@/components/pages/product/content/selectors/ProductSelector";

import {
  ProductData,
  ProductState,
  ProductReducerPayload,
} from "@/types/pages/product";
import { Dispatch } from "react";

interface ProductProps {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
}

const ProductInfo = ({
  product,
  productProps,
}: {
  product: ProductData;
  productProps: ProductProps;
}) => {
  const { types } = product;
  return (
    <div className="p-4 col-5 d-flex flex-column justify-content-start align-items-center">
      <h1>Logo</h1>
      <h1 className="display-6">{product.title}</h1>
      <div className="d-flex flex-row gap-2">
        <span>{product.price.current}$</span>
        {product.price.sale && (
          <span>
            <del>{product.price.start}$</del>
          </span>
        )}
      </div>
      <hr className="w-100" />
      <small>Code de référence: {product.ref}</small>
      <ProductSelector productProps={productProps} types={types} />
    </div>
  );
};

export default ProductInfo;
