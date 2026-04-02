import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = [
    "assets/Reception.jpg",
    "assets/Scan.jpg",
    "assets/Chaise-dentaire.jpg",
    "assets/Salle-d-attente.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Image Section - Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${img}")` }}
          />
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section Below Image */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Professionnelles · Expérimentées · Passionnées
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Notre mission à la clinique est d’offrir une expérience positive et agréable à tous nos patients, et ce à chaque visite, en plaçant votre santé dentaire au centre de notre engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-105"
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
