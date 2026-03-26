
const Team = () => {
  return (
    <div className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Notre équipe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une équipe dynamique, expérimentée et attentionnée pour prendre soin de votre sourire.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Les dentistes</h2>
            <img 
              src="assets/BoucheArt-0805.jpg" 
              alt="Les dentistes de la clinique" 
              className="w-full rounded-lg shadow-md mb-6 max-h-[500px] object-cover"
            />
            <p className="text-xl text-brand-700 font-bold">
              Dre Rosalie Dufour, Dre Kathy Bouchard et Dre Gaële Paquet
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos assistantes dentaires</h2>
            <img 
              src="assets/BoucheArt-0410.jpg" 
              alt="Nos assistantes dentaires" 
              className="w-full rounded-lg shadow-md mb-6 max-h-[500px] object-cover"
            />
            <p className="text-xl text-brand-700 font-bold">
              Sabrina Néron, Mélissa Perron et Nathalie Paquet
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre équipe d'hygiénistes</h2>
            <img 
              src="assets/BoucheArt-0202.jpg" 
              alt="Notre équipe d'hygiénistes" 
              className="w-full rounded-lg shadow-md mb-6 max-h-[500px] object-cover"
            />
            <p className="text-xl text-brand-700 font-bold">
              Fanny Duclos, Simon Gagnon et Valérie Caron-Labranche
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos secrétaires</h2>
            <img 
              src="assets/BoucheArt-9986.jpg" 
              alt="Nos secrétaires" 
              className="w-full rounded-lg shadow-md mb-6 max-h-[500px] object-cover"
            />
            <p className="text-xl text-brand-700 font-bold">
              France St-Hilaire, Mélanie Ferland et Karolane Dupuis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
