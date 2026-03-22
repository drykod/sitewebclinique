import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-gradient-to-r from-gray-50 to-white hover:from-brand-50 hover:to-white transition-colors"
      >
        <div className="flex items-center gap-4">
          {icon && <div className="text-brand-500">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="text-brand-500">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6 border-t border-gray-100 bg-white animate-fade-in">
          <div className="prose text-gray-600 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
