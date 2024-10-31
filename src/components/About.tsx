import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full flex items-center justify-center overflow-hidden border border-gray-500 shadow-lg">
              <img 
                src="https://github.com/Mickele-hub/Portfilio/blob/main/src/components/image/photo(1)(1).png" 
                alt="Ma photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-300 mb-4">
              En tant qu'administrateur réseaux passionné, je suis reconnu pour ma rigueur, ma capacité d'adaptation et mon esprit d'équipe. Mon expertise technique, couplée à une approche proactive de la résolution de problèmes, me permet de maintenir des infrastructures réseau robustes et sécurisées.
            </p>
            <p className="text-gray-300">
              Je suis constamment à l'affût des dernières technologies et meilleures pratiques dans le domaine des réseaux, ce qui me permet d'optimiser les performances et la sécurité des systèmes dont j'ai la charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
