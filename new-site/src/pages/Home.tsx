import Hero from '../components/Hero';
import { ShieldCheck, Heart, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bienvenue aux nouveaux patients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous offrons des soins dentaires adaptés à vos besoins dans une ambiance chaleureuse et professionnelle.
          </p>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-400 text-center group">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-100 transition-colors">
                <Clock className="text-brand-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Urgences acceptées</h3>
              <p className="text-gray-600">
                Douleur dentaire ? Nous faisons tout notre possible pour vous recevoir rapidement et soulager votre inconfort.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-500 text-center group">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-100 transition-colors">
                <Heart className="text-brand-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soins adaptés</h3>
              <p className="text-gray-600">
                Une approche humaine et personnalisée pour répondre aux besoins spécifiques de chaque membre de votre famille.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-600 text-center group">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-100 transition-colors">
                <ShieldCheck className="text-brand-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dentisterie familiale</h3>
              <p className="text-gray-600">
                De la prévention aux traitements esthétiques, nous offrons une gamme complète de soins pour tous les âges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="assets/CliniqueDentaireBoucheArt-5337.jpg" 
                alt="Notre équipe" 
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Une équipe passionnée</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Venez rencontrer notre équipe dynamique qui vous accueillera avec le sourire! Dre Kathy Bouchard et son équipe s'engagent à vous offrir des soins de la plus haute qualité.
              </p>
              <Link 
                to="/equipe" 
                className="inline-flex items-center text-brand-600 font-bold hover:text-brand-700 transition-colors"
              >
                Rencontrer notre équipe &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Teaser */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <MapPin className="mx-auto mb-4 text-brand-400" size={48} />
          <h2 className="text-3xl font-bold mb-4">Facile d'accès</h2>
          <p className="text-xl text-gray-300 mb-8">
            Situé au Centre Place Ste-Anne, 2e étage (ascenseur disponible).
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-brand-50 transition-colors"
          >
            Voir la carte et l'horaire
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
