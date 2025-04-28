import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import { artists } from '../data/artists';
import { tattooStyles } from '../data/tattoos';

const BookingPage: React.FC = () => {
  const artistsForForm = artists.map(artist => ({ id: artist.id, name: artist.name }));
  const stylesForForm = tattooStyles.map((style, index) => ({ id: index + 1, name: style }));
  
  const faqItems = [
    {
      question: "Quanto custa uma tatuagem?",
      answer: "O valor depende de diversos fatores como tamanho, complexidade, local do corpo e artista escolhido. Após a consulta inicial, forneceremos um orçamento detalhado."
    },
    {
      question: "É preciso marcar consulta antes?",
      answer: "Sim, recomendamos agendar uma consulta prévia para discutir seu projeto, avaliar a viabilidade e fornecer um orçamento. Isso também permite que você conheça o artista e o estúdio."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito. Para projetos maiores, oferecemos a possibilidade de parcelamento."
    },
    {
      question: "Preciso levar alguma referência visual?",
      answer: "Não é obrigatório, mas é altamente recomendado. Referências visuais ajudam a comunicar suas ideias de forma mais clara e precisa."
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer: "A duração varia conforme o projeto. Tatuagens pequenas podem levar menos de uma hora, enquanto projetos maiores podem requerer múltiplas sessões de 3-5 horas cada."
    },
    {
      question: "Como devo me preparar para a sessão?",
      answer: "Venha bem alimentado, descansado e hidratado. Evite álcool nas 24h anteriores e não use cremes ou óleos na área a ser tatuada. Use roupas confortáveis que permitam acesso à área escolhida."
    }
  ];
  
  return (
    <>
      <HeroSection 
        title="Agende sua Sessão"
        subtitle="Transforme suas ideias em arte permanente"
        backgroundImage="https://images.pexels.com/photos/1376766/pexels-photo-1376766.jpeg"
      />
      
      <section className="section bg-primary">
        <div className="container-custom">
          <SectionTitle 
            title="Processo de Agendamento" 
            subtitle="Siga os passos abaixo para iniciar sua jornada de tatuagem"
          />
          
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Consulta Inicial",
                description: "Preencha o formulário abaixo com seus dados e preferências para iniciar o processo."
              },
              {
                number: "02",
                title: "Desenho & Orçamento",
                description: "Nosso artista criará um design personalizado baseado em suas ideias e fornecerá um orçamento."
              },
              {
                number: "03",
                title: "Sessão de Tatuagem",
                description: "Após a aprovação do design e orçamento, agendaremos sua sessão de tatuagem."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute -right-4 -top-4 text-8xl font-bold text-secondary/30">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="mb-4 text-xl font-cinzel">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-2xl font-cinzel">Perguntas Frequentes</h3>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details 
                    key={index}
                    className="overflow-hidden border-b border-secondary p-1 last:border-0"
                  >
                    <summary className="cursor-pointer py-3 font-medium">
                      {item.question}
                    </summary>
                    <p className="pb-3 pt-1 text-text-secondary">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BookingForm artists={artistsForForm} styles={stylesForForm} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;