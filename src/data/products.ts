export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  colors: { name: string; hex: string }[];
  price: string;
};

// Contenido provisional de ejemplo — sustituir por textos, precios y
// especificaciones definitivos del catálogo real.
export const products: Product[] = [
  {
    id: "tartan",
    name: "Arnés Tartán",
    description:
      "Nuestro diseño más querido: un estampado de cuadros cálido para los paseos de cada día.",
    image: "/images/product-tartan-set.jpg",
    colors: [
      { name: "Tartán clásico", hex: "#9C8258" },
      { name: "Crema", hex: "#EDE4CF" },
    ],
    price: "Desde 39€ (ejemplo)",
  },
  {
    id: "pata",
    name: "Arnés Pata de Camel",
    description:
      "Un print propio de huellas sobre tono camel, a juego con correa y bolsa dispensadora.",
    image: "/images/product-olive-stool.jpg",
    colors: [
      { name: "Camel", hex: "#C9A876" },
      { name: "Oliva", hex: "#6B6F45" },
    ],
    price: "Desde 39€ (ejemplo)",
  },
  {
    id: "oliva",
    name: "Arnés Verde Oliva",
    description:
      "Líneas limpias y un verde profundo para quienes prefieren lo discreto y lo resistente.",
    image: "/images/product-olive-macro.jpg",
    colors: [
      { name: "Verde oliva", hex: "#6B6F45" },
      { name: "Arena", hex: "#DCC9A3" },
    ],
    price: "Desde 39€ (ejemplo)",
  },
];
