import { useEffect } from "react";

import type {
  ProductReducerPayload,
  ProductState,
  Type,
} from "@/types/pages/product";
import { Dispatch } from "react";

import BootStrapRow from "@/utils/BootStrapRow";

import ProductImageCarousel from "@/components/pages/product/image/ProductImageCarousel";
import ProductImageSelector from "@/components/pages/product/image/ProductImageSelector";

const ProductImage = ({
  product_state,
  product_dispatch,
  types,
}: {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
  types: Type[];
}) => {
  const images = types?.find(
    (type: Type) => type.color.name === product_state.color
  )?.images;

  useEffect(() => {
    product_dispatch({ type: "set_image", payload: 0 });
  }, [product_state.color]);

  return (
    <div className="col-7">
      <BootStrapRow>
        {images ? (
          <>
            <div className="col-3">
              <ProductImageSelector
                images={images}
                product_dispatch={product_dispatch}
              />
            </div>
            <div className="col-9 h-50">
              <ProductImageCarousel
                images={images}
                product_state={product_state}
              />
            </div>
          </>
        ) : (
          <span>an error as occured</span>
        )}
      </BootStrapRow>
    </div>
  );
};

export default ProductImage;
