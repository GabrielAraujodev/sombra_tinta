import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface ArtistCardProps {
  image: string;
  name: string;
  specialty: string;
  bio: string;
  instagram?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ 
  image, 
  name, 
  specialty, 
  bio, 
  instagram 
}) => {
  return (
    <motion.div 
      className="overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-2xl font-cinzel">{name}</h3>
        <p className="mb-4 font-medium text-accent">{specialty}</p>
        <p className="mb-4 text-text-secondary">{bio}</p>
        {instagram && (
          <a 
            href={`https://instagram.com/${instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-accent hover:underline"
          >
            <Instagram size={18} className="mr-1" />
            @{instagram}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ArtistCard;