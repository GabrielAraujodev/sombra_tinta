import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-primary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About & Address */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4">Arte na pele, personalidade em cada traço</p>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span> T7, 0000<br /> Setor Bueno, Goiânoa - GO<br />CEP: 01310-100</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(62) 95555-5555</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contato@sombraetinta.com.br</span>
              </div>
            </address>
          </div>
          
          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-cinzel font-medium mb-4">Horário de Funcionamento</h4>
            <div className="flex items-start mb-2">
              <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="mb-1">Segunda a Sexta: 10h às 20h</p>
                <p className="mb-1">Sábado: 10h às 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
            
            <h4 className="text-lg font-cinzel font-medium mt-8 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="hover:underline">Portfólio</Link>
              </li>
              <li>
                <Link to="/artistas" className="hover:underline">Nossos Artistas</Link>
              </li>
              <li>
                <Link to="/agendamento" className="hover:underline">Agendar Sessão</Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h4 className="text-lg font-cinzel font-medium mb-4">Políticas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Termos de Serviço</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Política de Cancelamento</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Cuidados Pré e Pós Tatuagem</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-cinzel font-medium mb-4">Newsletter</h4>
            <p className="mb-4">Inscreva-se para receber novidades, promoções e trabalhos exclusivos.</p>
            <form className="mb-6">
              <div className="mb-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-2 text-text-primary outline-none" 
                  required
                />
              </div>
              <button type="submit" className="w-full bg-primary text-accent px-4 py-2 font-medium hover:bg-opacity-90 transition-all">
                Inscrever-se
              </button>
            </form>
            
            <h4 className="text-lg font-cinzel font-medium mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={22} className="hover:text-secondary transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={22} className="hover:text-secondary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={22} className="hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Estúdio Sombra & Tinta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;