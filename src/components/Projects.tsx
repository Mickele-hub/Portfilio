import React from 'react';
import { Cog, Shield, Network } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Automatisation de tâches',
      description: 'Développement de scripts pour automatiser les tâches répétitives d\'administration réseau.',
      icon: Cog,
    },
    {
      title: 'Déploiement pfSense',
      description: 'Configuration et mise en place d\'un pare-feu pfSense pour sécuriser l\'infrastructure réseau.',
      icon: Shield,
    },
    {
      title: 'Routage dynamique/statique',
      description: 'Implémentation de solutions de routage optimisées pour améliorer les performances du réseau.',
      icon: Network,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center mb-4 animate-bounce">
                <project.icon size={48} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
