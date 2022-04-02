import type { ProductData } from "@/types/pages/product";

const data: ProductData[] = [
  {
    id: "1",
    slug: "manteau-d’hiver-isolé-homme",
    title: "Manteau d'hiver isolé - Homme",
    brand: { name: "ONXX", logo: "" },
    price: {
      current: "99,99",
      sale: true,
      start: "199,98",
    },
    ref: "555338",
    types: [
      {
        color: { name: "khaki", hex: "#494D39" },
        images: [
          { link: "/img/webp/veste-khaki-1.webp", alt: "" },
          { link: "/img/webp/veste-khaki-2.webp", alt: "" },
          { link: "/img/webp/veste-khaki-3.webp", alt: "" },
        ],
        stock: [
          { size: "XS", quantity: 1 },
          { size: "S", quantity: 1 },
          { size: "M", quantity: 3 },
          { size: "L", quantity: 1 },
          { size: "XL", quantity: 1 },
        ],
      },
      {
        color: { name: "marin", hex: "#101B2A" },
        images: [
          { link: "/img/webp/veste-marin-1.webp", alt: "" },
          { link: "/img/webp/veste-marin-2.webp", alt: "" },
        ],
        stock: [
          { size: "XS", quantity: 0 },
          { size: "S", quantity: 0 },
          { size: "M", quantity: 1 },
          { size: "L", quantity: 1 },
          { size: "XL", quantity: 0 },
        ],
      },
      {
        color: { name: "noir", hex: "black" },
        images: [
          { link: "/img/webp/veste-noir-1.webp", alt: "" },
          { link: "/img/webp/veste-noir-2.webp", alt: "" },
        ],
        stock: [
          { size: "XS", quantity: 1 },
          { size: "S", quantity: 0 },
          { size: "M", quantity: 0 },
          { size: "L", quantity: 0 },
          { size: "XL", quantity: 0 },
        ],
      },
    ],
  },
];

export default data;
