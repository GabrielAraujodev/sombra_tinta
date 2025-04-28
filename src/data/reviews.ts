export interface Review {
  id: number;
  name: string;
  image?: string;
  rating: number;
  date: string;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Caroline Souza",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    date: "15/04/2025",
    review: "Experiência incrível! A Marina entendeu perfeitamente o que eu queria e o resultado superou todas as expectativas. O estúdio é super limpo e todos são muito profissionais. Já estou planejando minha próxima tattoo com eles!"
  },
  {
    id: 2,
    name: "Marcelo Alves",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    date: "02/03/2025",
    review: "O Ricardo é um artista excepcional! Fiz uma tatuagem no estilo old school e ficou perfeita. O ambiente é confortável e a equipe muito atenciosa do início ao fim. Recomendo demais!"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 4,
    date: "18/02/2025",
    review: "A Ana fez um trabalho incrível com minha tatuagem em aquarela. Ela é super cuidadosa e gentil durante todo o processo. O estúdio é moderno e bem localizado. Recomendo!"
  },
  {
    id: 4,
    name: "Gustavo Menezes",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    date: "05/01/2025",
    review: "Minha experiência com o Paulo foi sensacional! Ele é especialista em arte oriental e fez uma peça incrível no meu braço. Todo o processo foi tranquilo, desde o orçamento até o pós-tatuagem. Com certeza voltarei para completar a sleeve!"
  }
];