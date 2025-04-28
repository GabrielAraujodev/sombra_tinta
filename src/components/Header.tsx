import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Portfólio', path: '/portfolio' },
  { name: 'Artistas', path: '/artistas' },
  { name: 'Agendamento', path: '/agendamento' },
  { name: 'Contato', path: '/contato' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 shadow-sm backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'after:w-full text-accent' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="z-10 md:hidden" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-primary/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              <ul className="flex flex-col items-center space-y-6">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        `text-xl ${isActive ? 'text-accent' : 'text-text-primary'}`
                      }
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;