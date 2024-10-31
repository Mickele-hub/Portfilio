import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-white text-xl font-bold">Mickele ANDRIANARIVONY</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">À propos</a>
              <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Compétences</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projets</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-4 py-4 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <a href="#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Accueil</a>
        <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">À propos</a>
        <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Compétences</a>
        <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Projets</a>
        <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
