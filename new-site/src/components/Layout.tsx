import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src="assets/logo.png" alt="Clinique Dentaire Bouche Art" className="h-12 md:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors">Accueil</Link>
            <Link to="/services" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors">Nos services</Link>
            <Link to="/equipe" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors">Notre équipe</Link>
            <Link to="/contact" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors">Nous joindre</Link>
            <a href="tel:+14188278337" className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-5 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
              <Phone size={18} />
              (418) 827-8337
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              <Link to="/" className="text-lg font-medium text-gray-700" onClick={closeMenu}>Accueil</Link>
              <Link to="/services" className="text-lg font-medium text-gray-700" onClick={closeMenu}>Nos services</Link>
              <Link to="/equipe" className="text-lg font-medium text-gray-700" onClick={closeMenu}>Notre équipe</Link>
              <Link to="/contact" className="text-lg font-medium text-gray-700" onClick={closeMenu}>Nous joindre</Link>
              <a href="tel:+14188278337" className="text-cyan-600 font-bold flex items-center gap-2">
                <Phone size={18} />
                Appeler (418) 827-8337
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Column 1: Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Clinique Dentaire Bouche Art</h3>
            <p className="text-gray-400 mb-4">Professionnelles · Expérimentées · Passionnées</p>
            <div className="flex items-start gap-3 mb-2 text-gray-300">
              <MapPin className="shrink-0 mt-1" size={18} />
              <p>10516 Boulevard Sainte-Anne, bureau 200<br />Ste-Anne-de-Beaupré, Qc G0A 3C0</p>
            </div>
            <div className="flex items-center gap-3 mb-2 text-gray-300">
              <Phone size={18} />
              <a href="tel:+14188278337" className="hover:text-cyan-400">(418) 827-8337</a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Heures d'ouverture</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex justify-between"><span>Lun - Mer:</span> <span>8h30 - 20h00</span></li>
              <li className="flex justify-between"><span>Jeu:</span> <span>8h30 - 16h00</span></li>
              <li className="flex justify-between"><span>Ven:</span> <span>8h30 - 15h30</span></li>
              <li className="flex justify-between"><span>Sam - Dim:</span> <span>Fermé</span></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Nos services</Link></li>
              <li><Link to="/equipe" className="text-gray-300 hover:text-white transition-colors">Notre équipe</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Prendre rendez-vous</Link></li>
              <li className="mt-4">
                <a href="https://www.facebook.com/centredentairedrapeaubouchard/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  <Facebook size={20} />
                  Suivez-nous sur Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Clinique Dentaire Bouche Art. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
