import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DentistsDetail = () => {
  return (
    <div className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <Link 
          to="/equipe" 
          className="inline-flex items-center text-brand-600 hover:text-brand-800 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Retour à l'équipe
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nos dentistes</h1>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4">
            <img 
              src="assets/BoucheArt-0471.jpg" 
              alt="Détail dentiste 1" 
              className="w-full rounded-lg shadow-sm"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4">
            <img 
              src="assets/BoucheArt-0556.jpg" 
              alt="Détail dentiste 2" 
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistsDetail;
