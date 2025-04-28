import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TattooCard from '../components/TattooCard';
import ArtistCard from '../components/ArtistCard';
import ReviewCard from '../components/ReviewCard';
import { tattoos } from '../data/tattoos';
import { artists } from '../data/artists';
import { reviews } from '../data/reviews';
import { PenTool, Shield, Award, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredTattoos = tattoos.filter(tattoo => tattoo.featured);
  
  const features = [
    {
      icon: <PenTool size={32} />,
      title: "Artistas Premiados",
      description: "Nossa equipe é formada por tatuadores premiados e reconhecidos no cenário nacional."
    },
    {
      icon: <Shield size={32} />,
      title: "Biossegurança",
      description: "Seguimos rigorosos protocolos de higiene e esterilização para sua segurança."
    },
    {
      icon: <Award size={32} />,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas os melhores materiais e equipamentos para resultados impecáveis."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Personalização",
      description: "Cada tatuagem é única e desenvolvida especialmente para você."
    }
  ];
  
  return (
    <>
      <HeroSection 
        title="Estúdio Sombra & Tinta"
        subtitle="Arte na pele, personalidade em cada traço"
        backgroundImage="https://images.pexels.com/photos/4429282/pexels-photo-4429282.jpeg"
        cta={{
          text: "Agendar Sessão",
          link: "/agendamento"
        }}
      />
      
      {/* About Section */}
      <section className="section bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 font-cinzel">Sobre o Estúdio</h2>
              <p className="mb-6 text-text-secondary">
                Fundado em 2015, o Estúdio Sombra & Tinta nasceu da paixão por transformar a pele em tela. 
                Localizado no coração de São Paulo, nosso estúdio reúne talentos excepcionais em um ambiente 
                que combina profissionalismo, criatividade e acolhimento.
              </p>
              <p className="mb-8 text-text-secondary">
                Cada membro da nossa equipe traz uma especialidade única, garantindo que possamos oferecer 
                uma ampla variedade de estilos de tatuagem. Entendemos que uma tatuagem é mais que um desenho 
                na pele – é uma expressão permanente de identidade, uma história que você carrega consigo.
              </p>
              <Link to="/artistas" className="btn-primary">
                Conheça Nossa Equipe
              </Link>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/4125609/pexels-photo-4125609.jpeg" 
                alt="Estúdio Interior" 
                className="h-full w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6942843/pexels-photo-6942843.jpeg" 
                alt="Artista trabalhando" 
                className="h-full w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1530223/pexels-photo-1530223.jpeg" 
                alt="Arte e esboços" 
                className="h-full w-full object-cover" 
              />
              <img 
                src="https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg" 
                alt="Equipamento profissional" 
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-secondary/10">
        <div className="container-custom">
          <SectionTitle 
            title="Por que nos escolher" 
            subtitle="O que nos diferencia e garante sua satisfação."
          />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 rounded-full bg-primary p-4 text-accent shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-cinzel">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Tattoos */}
      <section className="section bg-primary">
        <div className="container-custom">
          <SectionTitle 
            title="Destaques da Semana" 
            subtitle="Conheça algumas das nossas criações recentes."
          />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTattoos.map(tattoo => (
              <TattooCard
                key={tattoo.id}
                image={tattoo.image}
                title={tattoo.title}
                artist={tattoo.artist}
                style={tattoo.style}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-outline">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>
      
      {/* Artists Preview */}
      <section className="section bg-secondary/10">
        <div className="container-custom">
          <SectionTitle 
            title="Nossos Artistas" 
            subtitle="Conheça os talentos por trás das agulhas."
          />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {artists.map(artist => (
              <ArtistCard
                key={artist.id}
                image={artist.image}
                name={artist.name}
                specialty={artist.specialty}
                bio={artist.bio.substring(0, 100) + '...'}
                instagram={artist.instagram}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/artistas" className="btn-outline">
              Conhecer Mais
            </Link>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="section bg-primary">
        <div className="container-custom">
          <SectionTitle 
            title="O que nossos clientes dizem" 
            subtitle="Experiências e histórias compartilhadas por quem já passou pelo nosso estúdio."
          />
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map(review => (
              <ReviewCard
                key={review.id}
                name={review.name}
                image={review.image}
                rating={review.rating}
                date={review.date}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 text-center">
        <div 
          className="absolute inset-0 bg-accent/80"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4543114/pexels-photo-4543114.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 font-cinzel text-primary">Pronto para eternizar sua história?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary">
              Transforme suas ideias em arte. Entre em contato conosco e comece a planejar sua próxima tatuagem.
            </p>
            <Link to="/agendamento" className="btn bg-primary text-accent hover:bg-opacity-90">
              Agendar Consulta
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;