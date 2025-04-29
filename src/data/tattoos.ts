export interface Tattoo {
  id: number;
  image: string;
  title: string;
  artist: string;
  style: string;
  featured?: boolean;
}

// Using images from Pexels that represent tattoo art
export const tattoos: Tattoo[] = [
  {
    id: 1,
    image: "https://image.cdn2.seaart.me/2025-04-25/d061l55e878c73dtbqng-2/583b33304386c87d5c5f910c45d2b84f_high.webp",
    title: "Flores Geométricas",
    artist: "Marina Silva",
    style: "Geométrico",
    featured: true
  },
  {
    id: 2,
    image: "https://image.cdn2.seaart.me/2025-04-25/d061r4le878c73dueekg-1/fc616d6e2dd943fe705a8aa2037cbc74_high.webp",
    title: "Águia Realista",
    artist: "Ricardo Almeida",
    style: "Realismo",
    featured: true
  },
  {
    id: 3,
    image: "https://image.cdn2.seaart.me/2025-04-25/d061uole878c73dv4e7g-1/c11531259602fb998da9d286c33309b7_high.webp",
    title: "Âncora Tradicional",
    artist: "João Costa",
    style: "Old School",
    featured: true
  },
  {
    id: 4,
    image: "https://image.cdn2.seaart.me/2025-04-29/d081qsle878c7382ois0-2/96b2d71cee68c7d95533243226d8b03a_high.webp",
    title: "Mandala Solar",
    artist: "Marina Silva",
    style: "Geométrico"
  },
  {
    id: 5,
    image: "https://image.cdn2.seaart.me/2025-04-25/d06233de878c73a1fdr0-1/b5bd1aad34261b1737b81c387600729f_high.webp",
    title: "Leão em Aquarela",
    artist: "Ana Ferreira",
    style: "Aquarela"
  },
  {
    id: 6,
    image: "https://image.cdn2.seaart.me/2025-04-26/d0624r5e878c73f7furg-2/b872e1f38e91bf425ca5340b5d9d0045_high.webp",
    title: "Ondas Minimalistas",
    artist: "Lucas Mendes",
    style: "Minimalista"
  },
  {
    id: 7,
    image: "https://image.cdn2.seaart.me/2025-04-26/d0626cle878c73a20i0g-1/2445e548f2ded2c9aa838f7ddb5c616e_high.webp",
    title: "Cobra Tribal",
    artist: "Ricardo Almeida",
    style: "Tribal"
  },
  {
    id: 8,
    image: "https://image.cdn2.seaart.me/2025-04-26/d0627j5e878c73a26oc0-1/b942583e6845164247515d0e68530e14_high.webp",
    title: "Samurai",
    artist: "Paulo Tanaka",
    style: "Oriental"
  },
  {
    id: 9,
    image: "https://image.cdn2.seaart.me/2025-04-26/d06295te878c73a2odpg/cacaaefeaa861c0e50833ab015e9049e_high.webp",
    title: "Pássaro em Linhas",
    artist: "Lucas Mendes",
    style: "Linework"
  }
];

export const tattooStyles = [
  "Realismo",
  "Old School",
  "Geométrico",
  "Aquarela",
  "Minimalista",
  "Oriental",
  "Tribal",
  "Linework"
];