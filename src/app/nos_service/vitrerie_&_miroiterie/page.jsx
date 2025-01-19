import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Vitrerie & Miroiterie - Expert Réparation & Installation",
    description:
      "EcoTech Dépannage offre des services professionnels de vitrerie et miroiterie. Que ce soit pour remplacer des vitrages, installer des miroirs ou réparer des fenêtres, nous intervenons rapidement pour des solutions esthétiques et durables.",
    alternates: {
      canonical: "/nos_service/vitrerie_&_miroiterie",
    },
    openGraph: {
      title:
        "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Vitrerie & Miroiterie - Expert Réparation & Installation",
      description:
        "EcoTech Dépannage offre des services professionnels de vitrerie et miroiterie. Que ce soit pour remplacer des vitrages, installer des miroirs ou réparer des fenêtres, nous intervenons rapidement pour des solutions esthétiques et durables.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/vitrerie_&_miroiterie`,
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
            "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Vitrerie & Miroiterie - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function VitrerieMiroiterieService() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="relative h-screen min-w-full w-full">
        <div className="bg-black opacity-60 inset-0 absolute"></div>
        <Image
          width={1920}
          height={1080}
          src="/service/vitrerie-miroiterie.jpg"
          alt="Vitrerie & Miroiterie – Réparation et Installation"
          className="object-cover object-top h-screen min-w-full w-full"
          title="Vitrerie & Miroiterie – Réparation et Installation"
        />
        <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
          <h1 className="font-black text-2xl md:text-6xl text-white text-center">
            Vitrerie & Miroiterie – Réparation et Installation
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-4">
            Chez <strong>EcoTech Dépannage</strong>, nous nous spécialisons dans
            les services de vitrerie et de miroiterie. Que ce soit pour un bris
            de glace, une vitre endommagée ou une installation sur mesure, nous
            intervenons rapidement pour répondre à vos besoins. Nous utilisons
            des matériaux de qualité pour garantir des résultats durables et
            esthétiques.
          </p>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Nos Services de Vitrerie & Miroiterie Incluent :
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Remplacement de Vitrage :</strong> Remplacement rapide de
              vitrages cassés ou endommagés, avec des matériaux de qualité et
              des solutions adaptées à vos besoins.
            </li>
            <li>
              <strong>Installation de Miroirs :</strong> Installation de miroirs
              décoratifs, de sécurité ou sur mesure, pour des résultats
              esthétiques et pratiques.
            </li>
            <li>
              <strong>Réparation de Fenêtres :</strong> Réparation de fenêtres
              cassées ou défectueuses, pour assurer une isolation thermique et
              acoustique optimale.
            </li>
            <li>
              <strong>Vitrage Anti-Vandalisme :</strong> Installation de
              vitrages spéciaux pour renforcer la sécurité de vos locaux.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Pourquoi Choisir EcoTech Dépannage ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Intervention Rapide :</strong> Disponibilité 24h/24 et
              7j/7 pour répondre à vos besoins urgents en vitrerie et
              miroiterie.
            </li>
            <li>
              <strong>Matériaux de Haute Qualité :</strong> Nous utilisons des
              matériaux résistants et durables pour garantir la longévité de
              vos installations.
            </li>
            <li>
              <strong>Solutions Personnalisées :</strong> Nous offrons des
              solutions sur mesure adaptées à vos exigences esthétiques et
              fonctionnelles.
            </li>
            <li>
              <strong>Service Fiable et Professionnel :</strong> Nous mettons un
              point d'honneur à respecter les délais et à offrir un service
              soigné.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Contactez-nous Aujourd'hui !
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Ne laissez pas un vitrage cassé nuire à la sécurité et à l&apos;esthétique
            de votre maison ou de votre bureau. Appelez <strong>EcoTech Dépannage</strong>
            dès maintenant pour une intervention rapide et professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}
