import React from 'react';
import { Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute left-0 top-0 transform translate-y-10"> 
        <div className="w-72 h-96 rounded-full bg-blue-800 custom-blur"></div>
      </div>
      <div className="absolute right-0 bottom-0 transform translate-x-10 -translate-y-32"> 
        <div className="w-72 h-96 rounded-full bg-blue-800 custom-blur"></div>
      </div>
      <div className="text-center relative">
        <div className="mb-8 flex justify-center">
          <Server size={64} className="text-blue-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white flex items-center justify-center">
          Bonjour je m'appelle Mickele Andrianarivony
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Administrateur Réseaux</p>
        <div className="rgb-border inline-block p-1 rounded-lg">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
