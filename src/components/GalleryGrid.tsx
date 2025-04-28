import React, { useState } from 'react';
import TattooCard from './TattooCard';
import { motion, AnimatePresence } from 'framer-motion';

interface TattooItem {
  id: number;
  image: string;
  title: string;
  artist: string;
  style: string;
}

interface GalleryGridProps {
  items: TattooItem[];
  filters?: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, filters = [] }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const filteredItems = activeFilter === 'Todos' 
    ? items 
    : items.filter(item => item.style === activeFilter);
  
  return (
    <div>
      {filters.length > 0 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 transition-all ${
              activeFilter === 'Todos' 
                ? 'bg-accent text-primary' 
                : 'bg-secondary/30 hover:bg-secondary/50'
            }`}
            onClick={() => setActiveFilter('Todos')}
          >
            Todos
          </button>
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 transition-all ${
                activeFilter === filter 
                  ? 'bg-accent text-primary' 
                  : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map(item => (
            <TattooCard
              key={item.id}
              image={item.image}
              title={item.title}
              artist={item.artist}
              style={item.style}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;