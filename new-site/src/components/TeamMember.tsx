import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow border border-gray-100">
      <div className="md:w-1/3 bg-gray-200 relative overflow-hidden group">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-64 md:h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <span>Photo à venir</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
        <div className="absolute bottom-4 left-4 text-white md:hidden">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm font-light opacity-90">{role}</p>
        </div>
      </div>
      
      <div className="p-8 md:w-2/3 flex flex-col justify-center">
        <div className="hidden md:block mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
            <p className="text-cyan-600 font-medium">{role}</p>
        </div>
        
        <div className="prose text-gray-600 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </div>
  );
};

export default TeamMember;
