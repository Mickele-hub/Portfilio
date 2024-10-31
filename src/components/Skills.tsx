import React from 'react';
import { Network, Shield, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Supervision', icon: Network },
    { name: 'Sécurité informatique', icon: Shield },
    { name: 'Scripting et automatisation', icon: Terminal },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center mb-4 animate-bounce">
                <skill.icon size={48} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
