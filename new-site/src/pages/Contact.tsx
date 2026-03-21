import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nous joindre</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-full text-cyan-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Adresse</h3>
                  <p className="text-gray-600">
                    10516 Boulevard Sainte-Anne, bureau 200<br />
                    Ste-Anne-de-Beaupré, Qc G0A 3C0<br />
                    <span className="text-sm text-gray-500 mt-1 block">Le Centre Place Ste-Anne, 2e étage (ascenseur disponible)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+14188278337" className="hover:text-green-600 transition-colors">(418) 827-8337</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Courriel</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@cliniquedentaireboucheart.com" className="hover:text-blue-600 transition-colors break-all">info@cliniquedentaireboucheart.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Heures d'ouverture</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between w-48"><span className="font-medium">Lun - Mer:</span> 8h30 - 20h00</li>
                    <li className="flex justify-between w-48"><span className="font-medium">Jeu:</span> 8h30 - 16h00</li>
                    <li className="flex justify-between w-48"><span className="font-medium">Ven:</span> 8h30 - 15h30</li>
                    <li className="flex justify-between w-48"><span className="font-medium">Sam - Dim:</span> Fermé</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.facebook.com/centredentairedrapeaubouchard/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <Facebook size={24} />
                  Suivez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100 h-80 overflow-hidden">
                <iframe 
                    title="Google Map Clinique"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.577237890449!2d-70.9173731846877!3d47.02721077915049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8c98a06b1002d%3A0x562af0f14fd8032c!2sCentre%20dentaire%20Drapeau%20et%20Bouchard!5e0!3m2!1sfr!2sca!4v1620000000000!5m2!1sfr!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                ></iframe>
            </div>

            {/* Simple Form */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Envoyez-nous un message</h3>
                <form className="space-y-4" action="mailto:info@cliniquedentaireboucheart.com" method="post" encType="text/plain">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Courriel</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                        Envoyer
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
