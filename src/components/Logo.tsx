import React from 'react';
import { Paintbrush } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Paintbrush size={32} className="text-accent mr-2" />
      <div>
        <span className="font-cinzel text-lg md:text-xl font-semibold">
          Sombra <span className="text-accent">&</span> Tinta
        </span>
      </div>
    </div>
  );
};

export default Logo;