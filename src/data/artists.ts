export interface Artist {
  id: number;
  name: string;
  image: string;
  specialty: string;
  bio: string;
  instagram: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Marina Silva",
    image: "https://images.pexels.com/photos/31779366/pexels-photo-31779366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Realismo & Geométrico",
    bio: "Com mais de 8 anos de experiência, Marina se especializou em tatuagens realistas e geométricas, combinando precisão técnica com uma visão artística única. Sua formação em Belas Artes traz uma perspectiva diferenciada para cada trabalho.",
    instagram: "marina.tattoo"
  },
  {
    id: 2,
    name: "Ricardo Almeida",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    specialty: "Old School & Neotradicional",
    bio: "Ricardo é apaixonado pelo estilo tradicional americano e suas variações contemporâneas. Com uma carreira de mais de 12 anos, ele traz um toque moderno para designs clássicos, criando peças atemporais com linhas firmes e cores vibrantes.",
    instagram: "ricardo_oldschool"
  },
  {
    id: 3,
    name: "Ana Ferreira",
    image: "https://images.pexels.com/photos/3828268/pexels-photo-3828268.jpeg",
    specialty: "Aquarela & Minimalista",
    bio: "Especializada em técnicas de aquarela e designs minimalistas, Ana cria tatuagens delicadas e expressivas. Sua abordagem artística leve e contemporânea resulta em peças únicas e cheias de personalidade, perfeitas para quem busca algo sutil e significativo.",
    instagram: "ana_aquarela"
  },
  {
    id: 4,
    name: "Paulo Tanaka",
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
    specialty: "Oriental & Irezumi",
    bio: "Com profundo conhecimento na arte tradicional japonesa de tatuagem (Irezumi), Paulo cria peças impressionantes com dragões, carpas koi e outras figuras míticas orientais. Seu trabalho é marcado pela atenção aos detalhes e respeito às tradições.",
    instagram: "paulo_irezumi"
  }
];