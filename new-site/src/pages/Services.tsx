import ServiceCard from '../components/ServiceCard';
import { 
  Stethoscope, 
  Smile, 
  Sparkles, 
  Microscope, 
  Syringe, 
  HeartPulse, 
  Gem, 
  Activity, 
  Shield 
} from 'lucide-react';

const servicesData = [
  {
    title: "Dentisterie générale et familiale",
    icon: <Stethoscope size={24} />,
    description: `
      <p class="mb-4">Un des traitements les plus connus chez le dentiste est la réparation des caries présentes dans la bouche à l'aide d'obturation (communément appelé plombage). Dès la détection des caries, il est important d'en faire l'ablation et de reconstruire la dent avec une obturation.</p>
      <p class="mb-4">Il existe deux types de matériaux utilisés pour les obturations: l'<strong>amalgame</strong> (plombage gris) et le <strong>composite</strong> (plombage blanc).</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>L’amalgame :</strong> Alliage d’argent, d’étain et de cuivre. Très résistant et durable pour les dents postérieures.</li>
        <li><strong>Le composite :</strong> Matériau esthétique de la couleur de la dent. Idéal pour un résultat naturel.</li>
      </ul>
    `
  },
  {
    title: "Orthodontie",
    icon: <Smile size={24} />,
    description: `
      <p class="mb-4">Dre Bouchard, dentiste généraliste, a complété une formation supplémentaire en orthodontie à l'Institut Dentaire International sur une période de 3 ans.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Orthodontie d'interception :</strong> Pour les enfants en bas âge (dentition mixte) pour corriger certaines malocclusions rapidement.</li>
        <li><strong>Orthodontie fixe :</strong> Alignement des dents à l'aide de broches (souvent à l'adolescence).</li>
        <li><strong>Aligneurs transparents (SPARK) :</strong> Coquilles transparentes amovibles pour corriger l'alignement de façon discrète.</li>
      </ul>
    `
  },
  {
    title: "Facettes et esthétique",
    icon: <Sparkles size={24} />,
    description: `
      <p class="mb-4">La facette est une restauration pelliculaire purement esthétique qui permet de recouvrir la face buccale (le devant) d’une dent.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Facettes :</strong> En composite ou porcelaine pour masquer les défauts de couleur ou de forme.</li>
        <li><strong>Fermeture de diastème :</strong> Fermeture de l'espace entre deux dents pour améliorer l'esthétique.</li>
        <li><strong>Bijou dentaire :</strong> Pose de petit "diamant" sur la surface d'une dent.</li>
      </ul>
    `
  },
  {
    title: "Examens dentaires et nettoyages périodiques",
    icon: <Microscope size={24} />,
    description: `
      <p class="mb-4">La fréquence recommandée est généralement de deux examens par année. Il ne faut pas attendre d'avoir mal aux dents avant de consulter!</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Nettoyage :</strong> Détartrage et polissage par l'hygiéniste pour enlever la plaque et le tartre.</li>
        <li><strong>Examen :</strong> Vérification complète par le dentiste (caries, obturations, maladies des gencives, etc.).</li>
        <li><strong>Radiographies numériques :</strong> Pour voir entre les dents et sous la gencive, avec moins de radiation.</li>
      </ul>
    `
  },
  {
    title: "Traitement de canal",
    icon: <Activity size={24} />,
    description: `
      <p class="mb-4">Le traitement de canal permet de conserver une dent dont la pulpe (nerf) est infectée ou morte, évitant ainsi l'extraction.</p>
      <p>La dent est nettoyée, désinfectée, puis scellée. Une couronne est souvent recommandée ensuite pour redonner sa solidité à la dent.</p>
    `
  },
  {
    title: "Parodontie",
    icon: <HeartPulse size={24} />,
    description: `
      <p class="mb-4">Traitement des maladies des gencives et de l'os qui supporte les dents.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Gingivite :</strong> Inflammation de la gencive (rougeur, saignement), réversible avec une bonne hygiène.</li>
        <li><strong>Parodontite :</strong> Affection plus sévère atteignant l'os. Nécessite des soins professionnels pour arrêter la progression.</li>
        <li><strong>Greffes de gencive :</strong> Pour traiter le déchaussement des dents (récession gingivale) et renforcer la gencive.</li>
      </ul>
    `
  },
  {
    title: "Couronnes, ponts et implants",
    icon: <Gem size={24} />,
    description: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Couronne :</strong> Recouvre entièrement une dent abîmée pour la protéger et lui redonner sa forme.</li>
        <li><strong>Pont fixe :</strong> Remplace une ou plusieurs dents manquantes en s'appuyant sur les dents voisines.</li>
        <li><strong>Restauration sur implant :</strong> Couronne ou prothèse fixée sur une racine artificielle (implant) pour remplacer une dent manquante sans toucher aux dents voisines.</li>
      </ul>
    `
  },
  {
    title: "Prothèses complètes et partielles",
    icon: <Smile size={24} />, // Reusing Smile icon or finding a better one
    description: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Prothèses complètes (dentiers) :</strong> Remplacement de toutes les dents pour restaurer la fonction et l'esthétique. Confection en environ 5 rendez-vous.</li>
        <li><strong>Prothèses partielles :</strong> Appareil amovible pour remplacer quelques dents manquantes, avec une structure en métal (vitallium) ou en acrylique.</li>
        <li><strong>Prothèses immédiates :</strong> Fabriquées avant les extractions et mises en bouche le jour même.</li>
      </ul>
    `
  },
  {
    title: "Blanchiment des dents",
    icon: <Sparkles size={24} />,
    description: `
      <p class="mb-4">Pour redonner de l'éclat à votre sourire. Le blanchiment agit sur les taches causées par le café, le thé, le tabac, etc.</p>
      <p><strong>À la maison :</strong> Gouttières personnalisées avec un gel de peroxyde à porter le jour ou la nuit pendant environ 2 semaines.</p>
    `
  },
  {
    title: "Prévention",
    icon: <Shield size={24} />,
    description: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Fluor :</strong> Application topique chez les enfants pour renforcer l'émail.</li>
        <li><strong>Scellants :</strong> Protection des sillons des dents permanentes (molaires) contre la carie.</li>
        <li><strong>Plaque occlusale :</strong> Pour les gens qui grincent des dents (bruxisme), protège les dents de l'usure prématurée.</li>
        <li><strong>Protecteur buccal :</strong> Essentiel pour les sportifs afin de prévenir les blessures dentaires.</li>
      </ul>
    `
  },
  {
    title: "Extractions et Urgence",
    icon: <Syringe size={24} />,
    description: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Extractions :</strong> Dents très cariées, fracturées ou dents de sagesse incluses.</li>
        <li><strong>Urgence :</strong> Service de dépannage le jour même pour soulager la douleur, réparer une dent cassée ou traiter une infection.</li>
      </ul>
    `
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de soins dentaires pour toute la famille, offerts avec douceur et professionnalisme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
