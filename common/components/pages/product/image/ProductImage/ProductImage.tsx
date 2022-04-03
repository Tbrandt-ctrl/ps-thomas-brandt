import { useEffect } from "react";

import type {
  ReducerPayload,
  SelectionState,
  Type,
} from "@/types/pages/product";
import { Dispatch } from "react";

import BootStrapRow from "@/utils/BootStrapRow";

import ProductImageCarousel from "@/components/pages/product/image/ProductImageCarousel";
import ProductImageSelector from "@/components/pages/product/image/ProductImageSelector";

const ProductImage = ({
  selection_state,
  selection_dispatch,
  types,
}: {
  selection_state: SelectionState;
  selection_dispatch: Dispatch<ReducerPayload>;
  types: Type[];
}) => {
  const images = types?.find(
    (type: Type) => type.color.name === selection_state.color
  )?.images;

  useEffect(() => {
    selection_dispatch({ type: "set_image", payload: 0 });
  }, [selection_state.color]);

  return (
    <div className="col-7">
      <BootStrapRow>
        {images ? (
          <>
            <div className="col-3">
              <ProductImageSelector
                images={images}
                selection_dispatch={selection_dispatch}
              />
            </div>
            <div className="col-9 h-50">
              <ProductImageCarousel
                images={images}
                selection_state={selection_state}
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
