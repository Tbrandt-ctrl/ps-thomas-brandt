import { ProductState, Image } from "@/types/pages/product";

const ProductImageCarousel = ({
  images,
  product_state,
}: {
  images: Image[];
  product_state: ProductState;
}) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`carousel-item ${
                index === product_state.image_number ? "active" : null
              }`}
            >
              <img
                className="img-fluid d-block w-100"
                src={image.link}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
