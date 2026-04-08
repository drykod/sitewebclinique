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

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* Dre Rosalie Dufour - Gauche */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="assets/Dre-Rosalie-Dufour.jpg" 
                alt="Dre Rosalie Dufour" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-brand-700 mb-4">Dre Rosalie Dufour</h2>
              <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-sm">
                <p>
                  Graduée en 2025 de la Faculté de médecine dentaire de l'Université de Montréal, je suis de retour dans ma ville natale, Québec, où j’ai choisi de pratiquer à la Clinique dentaire Bouche Art.
                </p>
                <p>
                  Je base mon approche sur l'écoute et le respect, et je continue à suivre des formations pour offrir des soins toujours adaptés et de qualité. Pendant mes études, j'ai participé à une mission communautaire au Guatemala, où j'ai pu offrir des soins dentaires. Cette expérience, en lien avec mon désir de voyager et mon ouverture sur le monde, m'a beaucoup appris, autant sur le plan clinique que sur la manière d'être à l'écoute et de m'adapter aux besoins des patients.
                </p>
                <p>
                  En dehors de la clinique, je profite de mon temps libre pour pratiquer la natation, le yoga et la randonnée, des activités qui m'aident à garder un bon équilibre au quotidien.
                </p>
              </div>
            </div>
          </div>

          {/* Dre Kathy Bouchard - Centre */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="assets/BoucheArt-0471.jpg" 
                alt="Dre Kathy Bouchard" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 100%' }}
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-brand-700 mb-4">Dre Kathy Bouchard</h2>
              <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-sm">
                <p>
                  Graduée en 2008 de la faculté de médecine dentaire de l’Université de Montréal, je me suis établie dans la belle région de Québec où je pratique ma profession avec passion et dévouement. En 2017, j’ai fait l’acquisition d’une partie de la clinique afin de devenir co-propriétaire avec Dre Marie-Hélène Drapeau, fondatrice de la clinique en 1991. Puis, en 2024, je suis devenue l’unique propriétaire de la clinique à la suite de quoi j’ai entamé des travaux d’envergure afin d’agrandir et moderniser la clinique dans le but d’offrir davantage de soins à notre merveilleuse patientèle.
                </p>
                <p>
                  Sur un plan plus personnel, je suis l’heureuse mère de 3 adolescents qui me comblent de bonheur. Mes passe-temps sont la lecture, le cinéma et … la danse country-pop! Il faut bien se détendre un peu au travers de tout cela!
                </p>
              </div>
            </div>
          </div>

          {/* Dre Gaële Paquet - Droite */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="assets/BoucheArt-0637.jpg" 
                alt="Dre Gaële Paquet" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold text-brand-700 mb-4">Dre Gaële Paquet</h2>
              <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-sm">
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
  );
};

export default DentistsDetail;
