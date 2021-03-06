import styles from "./ProductImageSelector.module.scss";

import { Image } from "@/types/pages/product";
import { Dispatch } from "react";
import { ReducerPayload } from "@/types/reducer";

const ProductImageSelector = ({
  images,
  selection_dispatch,
}: {
  images: Image[];
  selection_dispatch: Dispatch<ReducerPayload>;
}) => {
  return (
    <div className="h-100 d-flex flex-column gap-2 justify-content-center align-items-center p-2">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <i
          className={`bi bi-arrow-up-short ${styles.arrow}`}
          onClick={() => {
            selection_dispatch({
              type: "previous_image",
              payload: images.length,
            });
          }}
        ></i>
        <i
          className={`bi bi-arrow-down-short ${styles.arrow}`}
          onClick={() =>
            selection_dispatch({ type: "next_image", payload: images.length })
          }
        ></i>
      </div>
      {images.map((image, index) => {
        return (
          <div key={index} className={`${styles.image}`}>
            <img
              onClick={() =>
                selection_dispatch({ type: "set_image", payload: index })
              }
              className="img-fluid"
              src={image.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductImageSelector;
