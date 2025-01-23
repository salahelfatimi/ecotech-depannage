import MessageCookies from "@/components/tools/cookies/message";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Climatisation - Expert Réparation & Installation",
    description:
      "Vous avez un problème avec votre climatisation ? EcoTech Dépannage offre des services de réparation, installation et entretien de systèmes de climatisation. Nous intervenons rapidement pour résoudre tous types de pannes, et vous assurons un confort optimal toute l'année.",
    alternates: {
      canonical: "/nos_service/climatisation",
    },
    openGraph: {
      title:
        "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Climatisation - Expert Réparation & Installation",
      description:
        "Vous avez un problème avec votre climatisation ? EcoTech Dépannage offre des services de réparation, installation et entretien de systèmes de climatisation. Nous intervenons rapidement pour résoudre tous types de pannes, et vous assurons un confort optimal toute l'année.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/climatisation`,
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
            "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Climatisation - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function ClimatisationService() {
  return (
    <div className="bg-gray-100 py-10">
      <MessageCookies/>
      <div className="relative h-screen min-w-full w-full">
        <div className="bg-black opacity-60 inset-0 absolute"></div>
        <Image
          width={1920}
          height={1080}
          src="/service/climatisation.jpg"
          alt="Climatisation – Réparation et Installation"
          className="object-cover object-top h-screen min-w-full w-full"
          title="Climatisation – Réparation et Installation"
        />
        <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
          <h1 className="font-black text-2xl md:text-6xl text-white text-center">
            Climatisation – Réparation et Installation
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-4">
            Chez <strong>EcoTech Dépannage</strong>, nous comprenons l&apos;importance d&apos;un système de climatisation fiable, surtout lors des journées chaudes. Nous proposons une gamme complète de services pour garantir le bon fonctionnement de vos installations. Qu&apos;il s&apos;agisse de réparations urgentes, d&apos;entretien préventif, ou d&apos;installation de nouveaux systèmes, nous sommes à votre disposition pour assurer un confort optimal toute l&apos;année.
          </p>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Nos Services de Climatisation Incluent :
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Réparation de Climatisation :</strong> Diagnostic et réparation des pannes de climatisation, qu&apos;il s&apos;agisse de fuites, de pannes électriques, ou de systèmes de refroidissement défectueux.
            </li>
            <li>
              <strong>Installation de Climatisation :</strong> Installation de systèmes de climatisation adaptés à vos besoins, avec des solutions écoénergétiques pour un confort optimal.
            </li>
            <li>
              <strong>Entretien de Climatisation :</strong> Entretien régulier pour maintenir la performance de votre climatisation et prolonger sa durée de vie.
            </li>
            <li>
              <strong>Maintenance Préventive :</strong> Vérifications et nettoyage des filtres, des conduits et des composants pour assurer une efficacité maximale.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Pourquoi Choisir EcoTech Dépannage ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Intervention Rapide :</strong> Disponibilité 24h/24 et 7j/7 pour une réparation rapide de votre climatisation.
            </li>
            <li>
              <strong>Expertise Certifiée :</strong> Nos techniciens sont qualifiés pour diagnostiquer et réparer tous types de pannes sur tous les systèmes de climatisation.
            </li>
            <li>
              <strong>Solutions Écoénergétiques :</strong> Installation de systèmes performants et économes en énergie pour réduire vos coûts de fonctionnement.
            </li>
            <li>
              <strong>Service de Qualité :</strong> Nous garantissons un service rapide, fiable et adapté à vos besoins, avec un respect strict des normes de sécurité.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Contactez-nous Aujourd&apos;hui !
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Ne laissez pas une panne de climatisation perturber votre confort. Appelez <strong>EcoTech Dépannage</strong> dès maintenant pour une intervention rapide et professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}
