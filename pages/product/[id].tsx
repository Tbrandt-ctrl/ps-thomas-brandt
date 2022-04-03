import { GetStaticProps, GetStaticPaths } from "next";

import { ProductData } from "@/types/pages/product";

import data from "./data";

import ProductContent from "@/components/pages/product/content/ProductContent";

export default function Product({ product }: { product: ProductData }) {
  return (
    <main className="py-5">
      <ProductContent product={product} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...data.map((product) => ({ params: { id: String(product.id) } })),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = params ? data.find((el) => el.id === params.id) : {};

  return { props: { product } };
};
