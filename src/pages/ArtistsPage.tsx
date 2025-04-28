import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { artists } from '../data/artists';
import { Award, Medal, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtistsPage: React.FC = () => {
  return (
    <>
      <HeroSection 
        title="Nossos Artistas"
        subtitle="Conheça os talentos que transformam suas ideias em arte"
        backgroundImage="https://images.pexels.com/photos/7959921/pexels-photo-7959921.jpeg"
      />
      
      <section className="section bg-primary">
        <div className="container-custom">
          <SectionTitle 
            title="Equipe de Tatuadores" 
            subtitle="Profissionais experientes e apaixonados pela arte da tatuagem"
          />
          
          {artists.map((artist, index) => (
            <motion.div 
              key={artist.id}
              className={`mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="h-full w-full object-cover shadow-md" 
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-3xl font-cinzel">{artist.name}</h3>
                <p className="mb-4 text-lg font-medium text-accent">{artist.specialty}</p>
                <p className="mb-6 text-text-secondary">{artist.bio}</p>
                
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Award size={18} className="mr-2 text-accent" />
                    <span>Certificado</span>
                  </div>
                  <div className="flex items-center">
                    <Medal size={18} className="mr-2 text-accent" />
                    <span>Premiado</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-accent" />
                    <span>+5 anos de experiência</span>
                  </div>
                  <div className="flex items-center">
                    <Zap size={18} className="mr-2 text-accent" />
                    <span>Estilo único</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`https://instagram.com/${artist.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Ver Instagram
                  </a>
                  <Link to="/agendamento" className="btn-primary">
                    Agendar com {artist.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="section bg-secondary/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 font-cinzel">Interessado em se juntar à nossa equipe?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-text-secondary">
              Estamos sempre abertos a novos talentos. Se você é um artista talentoso e apaixonado 
              pela arte da tatuagem, envie seu portfólio e currículo para nosso e-mail.
            </p>
            <a 
              href="mailto:carreiras@sombraetinta.com.br" 
              className="btn-primary"
            >
              Enviar Portfólio
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ArtistsPage;