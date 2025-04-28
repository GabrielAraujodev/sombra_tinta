import React from 'react';
import { motion } from 'framer-motion';

interface TattooCardProps {
  image: string;
  title: string;
  artist: string;
  style: string;
}

const TattooCard: React.FC<TattooCardProps> = ({ image, title, artist, style }) => {
  return (
    <motion.div 
      className="group overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-xl font-cinzel">{title}</h3>
        <p className="mb-2 text-text-secondary">Artista: {artist}</p>
        <span className="inline-block bg-secondary px-3 py-1 text-sm text-text-primary">
          {style}
        </span>
      </div>
    </motion.div>
  );
};

export default TattooCard;