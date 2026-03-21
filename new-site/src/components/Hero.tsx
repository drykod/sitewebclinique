import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url("/assets/salle.jpg")' }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">
          Professionnelles · Expérimentées · Passionnées
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Votre sourire est notre priorité. Bienvenue à la Clinique Dentaire Bouche Art.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Prendre rendez-vous
          </Link>
          <Link 
            to="/services" 
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
          >
            Nos services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
