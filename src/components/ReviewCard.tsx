import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  image?: string;
  rating: number;
  date: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ 
  name, 
  image, 
  rating, 
  date, 
  review 
}) => {
  return (
    <motion.div 
      className="bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex items-center">
        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover" 
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-accent text-primary">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-lg font-medium">{name}</h4>
          <p className="text-sm text-text-secondary">{date}</p>
        </div>
      </div>
      
      <div className="mb-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'fill-accent text-accent' : 'text-secondary'}
          />
        ))}
      </div>
      
      <p className="text-text-secondary">{review}</p>
    </motion.div>
  );
};

export default ReviewCard;