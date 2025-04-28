import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Me chamo ${formData.name}.\n\n*Assunto:* ${formData.subject}\n\n${formData.message}\n\n*Telefone para contato:* ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511955555555?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <HeroSection 
        title="Entre em Contato"
        subtitle="Estamos aqui para responder suas dúvidas e ajudar em sua jornada"
        backgroundImage="https://images.pexels.com/photos/6954509/pexels-photo-6954509.jpeg"
      />
      
      <section className="section bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 font-cinzel">Informações de Contato</h2>
              
              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Endereço</h3>
                    <address className="not-italic text-text-secondary">
                      Av. T7, 0000<br />
                      Setor Bueno, Goiânoa - GO<br />
                      CEP: 00000-000
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Telefone</h3>
                    <p className="text-text-secondary">(62) 95555-5555</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3">
                    <MessageSquare size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5511955555555" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent"
                    >
                      Envie uma mensagem
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Horário de Funcionamento</h3>
                    <p className="mb-1 text-text-secondary">Segunda a Sexta: 10h às 20h</p>
                    <p className="mb-1 text-text-secondary">Sábado: 10h às 18h</p>
                    <p className="text-text-secondary">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              
              <h3 className="mb-4 text-xl font-cinzel">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent"
                >
                  <Instagram size={22} className="mr-2" />
                  @sombraetinta
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent"
                >
                  <Facebook size={22} className="mr-2" />
                  /sombraetinta
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent"
                >
                  <Twitter size={22} className="mr-2" />
                  @sombraetinta
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 font-cinzel">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-secondary p-3 outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block font-medium">WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-secondary p-3 outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-secondary p-3 outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border border-secondary p-3 outline-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Enviar no WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="h-[400px] bg-accent">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122208.06723855203!2d-49.45798946154567!3d-16.826251857870158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sT7!5e0!3m2!1spt-BR!2sbr!4v1745628867597!5m2!1spt-BR!2sbr"
          className="h-full w-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Estúdio Sombra & Tinta"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;