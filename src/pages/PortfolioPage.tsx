import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import { tattoos, tattooStyles } from '../data/tattoos';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroSection 
        title="Nosso Portfólio"
        subtitle="Conheça nossos trabalhos e encontre inspiração para sua próxima tatuagem"
        backgroundImage="https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg"
      />
      
      <section className="section bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="Galeria de Tatuagens" 
              subtitle="Filtre por estilo para encontrar exatamente o que procura"
            />
            
            <GalleryGrid items={tattoos} filters={tattooStyles} />
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 font-cinzel">Cada tatuagem conta uma história</h2>
              <p className="mb-4 text-text-secondary">
                No Estúdio Sombra & Tinta, acreditamos que cada tatuagem é uma expressão artística única. 
                Nossos artistas trabalham em colaboração com você para transformar suas ideias em arte permanente.
              </p>
              <p className="text-text-secondary">
                Se você não encontrou exatamente o que procura em nossa galeria, não se preocupe. 
                Nossas criações são personalizadas e adaptadas ao seu estilo e preferências. 
                Entre em contato para uma consulta e discuta suas ideias diretamente com nossos artistas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="src/assets/20250425_2128_image.png" 
                alt="Processo de tatuagem" 
                className="h-full w-full object-cover shadow-md" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;