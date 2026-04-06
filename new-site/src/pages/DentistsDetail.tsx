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

        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* Section Dre Kathy Bouchard */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch">
              <div className="md:w-1/2 w-full">
                <img 
                  src="assets/BoucheArt-0471.jpg" 
                  alt="Dre Kathy Bouchard" 
                  className="w-full h-full rounded-lg shadow-sm object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center py-4">
                <div>
                  <h2 className="text-3xl font-bold text-brand-700 mb-8">Dre Kathy Bouchard</h2>
                  <div className="text-gray-600 leading-loose text-lg text-justify space-y-4">
                    <p>
                      Graduée en 2008 de la faculté de médecine dentaire de l’Université de Montréal, je me suis établie dans la belle région de Québec où je pratique ma profession avec passion et dévouement. En 2017, j’ai fait l’acquisition d’une partie de la clinique afin de devenir co-propriétaire avec Dre Marie-Hélène Drapeau, fondatrice de la clinique en 1991. Puis, en 2024, je suis devenue l’unique propriétaire de la clinique à la suite de quoi j’ai entamé des travaux d’envergure afin d’agrandir et moderniser la clinique dans le but d’offrir davantage de soins à notre merveilleuse patientèle.
                    </p>
                    <p>
                      Sur un plan plus personnel, je suis l’heureuse mère de 3 adolescents qui me comblent de bonheur. Mes passe-temps sont la lecture, le cinéma et … la danse country-pop! Il faut bien se détendre un peu au travers de tout cela!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Rosalie */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6 md:p-8">
            <h2 className="text-3xl font-bold text-brand-700 mb-8 text-center">Dre Rosalie Dufour</h2>
            
            {/* Photo 0556 - Original photo */}
            <div className="max-w-3xl mx-auto mb-12">
              <img 
                src="assets/BoucheArt-0556.jpg" 
                alt="Dre Rosalie Dufour" 
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Photo 0637 with description */}
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch">
              <div className="md:w-1/2 w-full">
                <img 
                  src="assets/BoucheArt-0637.jpg" 
                  alt="Dre Rosalie Dufour" 
                  className="w-full h-full rounded-lg shadow-sm object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center py-4">
                <div className="text-gray-600 leading-relaxed text-lg text-justify space-y-6">
                  <p>
                    Graduée de la Faculté de médecine dentaire de l’Université Laval en 2025, j'ai décidé sans plus attendre de revenir à mes sources : la clinique dentaire Bouche Art, je la fréquente depuis mon enfance! 
                  </p>
                  <p>
                    J'ai grandi sur la belle Côte-de-Beaupré, j'y ai étudié et m'y suis installée. Venant d'une grande famille qui aime bouger, je pratique plusieurs sports, dont le dek hockey, et prends grand plaisir à voyager. J'ai d'ailleurs fait un stage international au Cambodge pendant mes années universitaires, où j'ai pu pousser ma pratique, notamment en chirurgie buccale. 
                  </p>
                  <p>
                    Sans cesse à la recherche de nouvelles expériences et formations, je tiens à parfaire mes connaissances pour offrir les meilleurs services à ma patientèle. Et le faire dans une approche toujours humaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistsDetail;
