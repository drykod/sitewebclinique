import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Image Section */}
      <div 
        className="w-full h-[400px] md:h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: 'url("assets/BoucheArt-0805.jpg")' }}
      >
      </div>

      {/* Content Section Below Image */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Professionnelles · Expérimentées · Passionnées
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Votre sourire est notre priorité. Bienvenue à la Clinique Dentaire Bouche Art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-105"
            >
              Prendre rendez-vous
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 font-bold py-4 px-10 rounded-full shadow-md transition"
            >
              Nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
