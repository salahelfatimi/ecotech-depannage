import MessageCookies from "@/components/tools/cookies/message";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Plomberie - Expert Réparation & Installation",
    description:
      "Besoin d’un spécialiste en plomberie ? EcoTech Dépannage offre des services de réparation, installation et entretien de plomberie. Que ce soit pour des fuites d'eau, des canalisations bouchées ou des pannes d'eau chaude, nous intervenons rapidement 24h/24 et 7j/7.",
    alternates: {
      canonical: "/nos_service/plomberie",
    },
    openGraph: {
      title:
        "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Plomberie - Expert Réparation & Installation",
      description:
        "Besoin d’un spécialiste en plomberie ? EcoTech Dépannage offre des services de réparation, installation et entretien de plomberie. Que ce soit pour des fuites d'eau, des canalisations bouchées ou des pannes d'eau chaude, nous intervenons rapidement 24h/24 et 7j/7.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/plomberie`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt:
            "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Plomberie - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function PlomberieService() {
  return (
    <div className="bg-gray-100 py-10">
      <MessageCookies/>
      <div className="relative h-screen min-w-full w-full">
        <div className="bg-black opacity-60 inset-0 absolute"></div>
        <Image
          width={1920}
          height={1080}
          src="/service/plomberie.jpg"
          alt="Plomberie – Réparation et Installation"
          className="object-cover object-top h-screen min-w-full w-full"
          title="Plomberie – Réparation et Installation"
        />
        <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
          <h1 className="font-black text-2xl md:text-6xl text-white text-center">
            Plomberie – Réparation et Installation
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-4">
            Chez <strong>EcoTech Dépannage</strong>, nous savons combien il est important de disposer d&apos;un système de plomberie fiable. Nos services incluent la réparation, l&apos;installation, et l&apos;entretien de toutes vos installations de plomberie, des canalisations aux systèmes de chauffe-eau. Nous intervenons rapidement pour résoudre tous types de problèmes, de la fuite d&apos;eau à l&apos;installation complète de votre réseau.
          </p>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Nos Services de Plomberie Incluent :
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Réparation de Plomberie :</strong> Détection et réparation rapide des fuites d&apos;eau, des canalisations bouchées, et des pannes de chauffe-eau.
            </li>
            <li>
              <strong>Installation de Plomberie :</strong> Installation de nouveaux équipements, systèmes de plomberie et chauffe-eaux, garantissant des solutions durables.
            </li>
            <li>
              <strong>Entretien de Plomberie :</strong> Maintenance régulière pour prévenir les pannes et améliorer l&apos;efficacité de vos installations.
            </li>
            <li>
              <strong>Réparation de Tuyauterie :</strong> Remplacement et réparation de tuyaux endommagés ou corrodés pour assurer un fonctionnement optimal.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Pourquoi Choisir EcoTech Dépannage ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Intervention Rapide :</strong> Disponibilité 24h/24 et 7j/7 pour des réparations urgentes.
            </li>
            <li>
              <strong>Plombiers Certifiés :</strong> Expertise et savoir-faire dans toutes les réparations et installations de plomberie.
            </li>
            <li>
              <strong>Matériaux de Qualité :</strong> Utilisation de composants fiables et durables pour toutes nos interventions.
            </li>
            <li>
              <strong>Solutions Durables :</strong> Nous vous proposons des solutions de plomberie qui durent, avec un excellent rapport qualité/prix.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Contactez-nous Aujourd&apos;hui !
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Ne laissez pas une fuite d&apos;eau ou une panne de plomberie perturber votre quotidien. Contactez <strong>EcoTech Dépannage</strong> dès maintenant pour une intervention rapide et efficace.
          </p>
        </div>
      </div>
    </div>
  );
}
