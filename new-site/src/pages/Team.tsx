import TeamMember from '../components/TeamMember';

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
          <TeamMember 
            name="Dre Kathy Bouchard"
            role="Dentiste généraliste"
            image="assets/equipe.jpg" 
            bio={`
              <p class="mb-4">Dre Kathy Bouchard est une dentiste généraliste passionnée par son métier. Soucieuse d'offrir les meilleurs soins à ses patients, elle se perfectionne continuellement.</p>
              <p class="mb-4">Elle a notamment complété une formation supplémentaire approfondie en <strong>orthodontie</strong> à l'Institut Dentaire International sur une période de 3 ans.</p>
              <p>Son approche humaine et douce saura vous mettre en confiance dès la première visite.</p>
            `}
          />

          <TeamMember 
            name="Dr Hugues Fontaine"
            role="Dentiste invité"
            bio={`
              <p class="mb-4">Dr Hugues Fontaine est un dentiste invité qui se déplace périodiquement à la clinique pour effectuer des chirurgies plus complexes.</p>
              <p>Il prend notamment en charge les <strong>extractions de dents de sagesse</strong> et les cas nécessitant une expertise chirurgicale particulière, vous permettant de recevoir ces soins directement à notre clinique.</p>
            `}
          />

          <TeamMember 
            name="Notre équipe d'hygiénistes"
            role="Hygiène et prévention"
            bio={`
              <p class="mb-4">Nos hygiénistes dentaires sont le cœur de notre volet prévention. Douces et minutieuses, elles sont responsables de vos nettoyages, du détartrage et du polissage de vos dents.</p>
              <p>Elles prendront le temps de vous donner des conseils personnalisés pour améliorer votre hygiène buccale à la maison et préserver la santé de vos dents et de vos gencives à long terme.</p>
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
