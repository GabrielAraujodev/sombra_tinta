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
    image: "src/assets/Flores Geométricas.png",
    title: "Flores Geométricas",
    artist: "Marina Silva",
    style: "Geométrico",
    featured: true
  },
  {
    id: 2,
    image: "src/assets/Águia Realista.png",
    title: "Águia Realista",
    artist: "Ricardo Almeida",
    style: "Realismo",
    featured: true
  },
  {
    id: 3,
    image: "src/assets/Âncora Tradicional.png",
    title: "Âncora Tradicional",
    artist: "João Costa",
    style: "Old School",
    featured: true
  },
  {
    id: 4,
    image: "src/assets/Mandala Solar.png",
    title: "Mandala Solar",
    artist: "Marina Silva",
    style: "Geométrico"
  },
  {
    id: 5,
    image: "src/assets/Leão em Aquarela.png",
    title: "Leão em Aquarela",
    artist: "Ana Ferreira",
    style: "Aquarela"
  },
  {
    id: 6,
    image: "src/assets/Ondas Minimalistas.png",
    title: "Ondas Minimalistas",
    artist: "Lucas Mendes",
    style: "Minimalista"
  },
  {
    id: 7,
    image: "src/assets/Cobra Tribal.png",
    title: "Cobra Tribal",
    artist: "Ricardo Almeida",
    style: "Tribal"
  },
  {
    id: 8,
    image: "src/assets/Samurai.png",
    title: "Samurai",
    artist: "Paulo Tanaka",
    style: "Oriental"
  },
  {
    id: 9,
    image: "src/assets/Águia Realista.png",
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