import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mickele - Administrateur Réseaux</p>
        <p className="mt-2 text-gray-400">Conçu avec passion et expertise</p>
      </div>
    </footer>
  );
};

export default Footer;