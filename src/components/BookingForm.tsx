import React, { useState } from 'react';
import { Calendar, Clock, User, Feather } from 'lucide-react';

interface Artist {
  id: number;
  name: string;
}

interface TattooStyle {
  id: number;
  name: string;
}

interface BookingFormProps {
  artists: Artist[];
  styles: TattooStyle[];
}

const BookingForm: React.FC<BookingFormProps> = ({ artists, styles }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistId: '',
    styleId: '',
    date: '',
    time: '',
    description: '',
    reference: '',
    size: '',
    placement: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedArtist = artists.find(artist => artist.id.toString() === formData.artistId);
    const selectedStyle = styles.find(style => style.id.toString() === formData.styleId);
    
    const message = `*Nova Solicitação de Agendamento*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tatuador:* ${selectedArtist?.name || 'Não selecionado'}\n` +
      `*Estilo:* ${selectedStyle?.name || 'Não selecionado'}\n` +
      `*Data Preferida:* ${formData.date}\n` +
      `*Horário Preferido:* ${formData.time}\n` +
      `*Tamanho:* ${formData.size}\n` +
      `*Local do Corpo:* ${formData.placement}\n\n` +
      `*Descrição da Tatuagem:*\n${formData.description}\n\n` +
      `*Referência:* ${formData.reference || 'Não fornecida'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511955555555?text=${encodedMessage}`, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      artistId: '',
      styleId: '',
      date: '',
      time: '',
      description: '',
      reference: '',
      size: '',
      placement: '',
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
      <h3 className="mb-6 text-2xl font-cinzel">Agende sua Sessão</h3>
      
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">Nome Completo</label>
          <div className="flex items-center border border-secondary">
            <span className="border-r border-secondary bg-secondary/10 p-3">
              <User size={20} className="text-text-secondary" />
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent p-3 outline-none"
              required
            />
          </div>
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
          <label htmlFor="artistId" className="mb-2 block font-medium">Tatuador</label>
          <div className="flex items-center border border-secondary">
            <span className="border-r border-secondary bg-secondary/10 p-3">
              <User size={20} className="text-text-secondary" />
            </span>
            <select
              id="artistId"
              name="artistId"
              value={formData.artistId}
              onChange={handleChange}
              className="w-full bg-transparent p-3 outline-none"
              required
            >
              <option value="">Selecione o tatuador</option>
              {artists.map(artist => (
                <option key={artist.id} value={artist.id}>{artist.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="styleId" className="mb-2 block font-medium">Estilo de Tatuagem</label>
          <div className="flex items-center border border-secondary">
            <span className="border-r border-secondary bg-secondary/10 p-3">
              <Feather size={20} className="text-text-secondary" />
            </span>
            <select
              id="styleId"
              name="styleId"
              value={formData.styleId}
              onChange={handleChange}
              className="w-full bg-transparent p-3 outline-none"
              required
            >
              <option value="">Selecione o estilo</option>
              {styles.map(style => (
                <option key={style.id} value={style.id}>{style.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="date" className="mb-2 block font-medium">Data Preferida</label>
          <div className="flex items-center border border-secondary">
            <span className="border-r border-secondary bg-secondary/10 p-3">
              <Calendar size={20} className="text-text-secondary" />
            </span>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-transparent p-3 outline-none"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="time" className="mb-2 block font-medium">Horário Preferido</label>
          <div className="flex items-center border border-secondary">
            <span className="border-r border-secondary bg-secondary/10 p-3">
              <Clock size={20} className="text-text-secondary" />
            </span>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-transparent p-3 outline-none"
              required
            >
              <option value="">Selecione o horário</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="size" className="mb-2 block font-medium">Tamanho Aproximado</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="Ex: 10cm x 15cm"
            className="w-full border border-secondary p-3 outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="placement" className="mb-2 block font-medium">Local do Corpo</label>
          <input
            type="text"
            id="placement"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            placeholder="Ex: Antebraço, Costas, etc."
            className="w-full border border-secondary p-3 outline-none"
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="description" className="mb-2 block font-medium">Descrição da Tatuagem</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-secondary p-3 outline-none"
          required
        ></textarea>
      </div>
      
      <div className="mb-8">
        <label htmlFor="reference" className="mb-2 block font-medium">Link de Referência (opcional)</label>
        <input
          type="url"
          id="reference"
          name="reference"
          value={formData.reference}
          onChange={handleChange}
          placeholder="Link de uma imagem de referência"
          className="w-full border border-secondary p-3 outline-none"
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-accent py-3 px-6 text-primary transition-all hover:bg-opacity-90"
      >
        Enviar Solicitação no WhatsApp
      </button>
    </form>
  );
};

export default BookingForm;