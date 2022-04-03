import { useState, useEffect } from "react";

import { ProductState, ProductReducerPayload } from "@/types/pages/product";
import { Dispatch } from "react";
import { Type } from "@/types/pages/product";
import { SyntheticEvent } from "react";

import ProductColorSelector from "@/components/pages/product/content/selectors/ProductColorSelector";
import ProductSizeSelector from "@/components/pages/product/content/selectors/ProductSizeSelector";
import ProductQuantitySelector from "@/components/pages/product/content/selectors/ProductQuantitiySelector";

interface ProductProps {
  product_state: ProductState;
  product_dispatch: Dispatch<ProductReducerPayload>;
}

const ProductSelector = ({
  productProps,
  types,
}: {
  productProps: ProductProps;
  types: Type[];
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const { product_state, product_dispatch } = productProps;

  const { color, size, quantity, success } = product_state;

  const current_type = types.find((type: Type) => type.color.name === color);

  useEffect(() => {
    setIsFormValid(color && size && quantity >= 1 ? true : false);
  }, [color, size, quantity]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    product_dispatch({ type: "submit" });

    const product_title = "Manteau d'hiver isolé - Homme"; //à mettre dans le state et l'intialiser au chargement de la page

    const success_message = `Vous avez commandé ${
      product_state.quantity === 1 ? "un" : product_state.quantity
    } ${product_title} ${product_state.color} en taille ${product_state.size}`;

    if (isFormValid) {
      try {
        console.log(success_message);
        product_dispatch({ type: "success" });
      } catch (error) {
        product_dispatch({ type: "error", payload: error });
      }
    } else {
      product_dispatch({
        type: "error",
        payload: "Le formulaire n'est pas valide",
      });
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-100 d-flex flex-column gap-4 justify-content-start align-items-start"
    >
      <ProductColorSelector {...productProps} types={types} />
      {current_type ? (
        <>
          <ProductSizeSelector {...productProps} current_type={current_type} />
          <ProductQuantitySelector
            {...productProps}
            current_type={current_type}
          />{" "}
        </>
      ) : (
        <span>please select a color</span>
      )}
      <button className="btn btn-dark text-uppercase" type="submit">
        Ajouter au panier
      </button>
      <span className="text-danger"> {product_state.error}</span>
      <span className="text-success">
        {success && "Votre selection a été ajoutée au panier"}
      </span>
    </form>
  );
};

export default ProductSelector;
