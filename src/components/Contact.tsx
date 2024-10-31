import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Contact</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="mailto:andrianarivonymickele2@gmail.com" target="_blank" className="flex items-center bg-gray-800 p-4 rounded-lg hover-zoom">
            <Mail size={24} className="text-blue-500 mr-2" />
            <span className="text-white">Email</span>
          </a>
          <a href="https://wa.me/0389215928" target="_blank" className="flex items-center bg-gray-800 p-4 rounded-lg hover-zoom">
            <Phone size={24} className="text-green-500 mr-2" />
            <span className="text-white">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
