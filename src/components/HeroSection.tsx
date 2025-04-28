import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta?: {
    text: string;
    link: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage, cta }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="relative flex h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-accent/70"></div>
      
      <div className="container-custom relative z-10 text-center text-primary">
        <motion.h1 
          className="mb-6 font-cinzel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={cta.link} 
              className="btn bg-primary text-accent hover:bg-opacity-90"
            >
              {cta.text}
            </a>
          </motion.div>
        )}
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToContent}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;