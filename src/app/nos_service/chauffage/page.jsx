import MessageCookies from "@/components/tools/cookies/message";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Chauffage - Expert Réparation & Installation",
    description:
      "Besoin d’un spécialiste en chauffage ? EcoTech Dépannage propose des services de réparation, installation et entretien de chauffages, chaudières, et pompes à chaleur. Intervention rapide 24h/24 et 7j/7 pour garantir un confort thermique optimal.",
    alternates: {
      canonical: "/nos_service/chauffage",
    },
    openGraph: {
      title:
        "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Chauffage - Expert Réparation & Installation",
      description:
        "Besoin d’un spécialiste en chauffage ? EcoTech Dépannage propose des services de réparation, installation et entretien de chauffages, chaudières, et pompes à chaleur. Intervention rapide 24h/24 et 7j/7 pour garantir un confort thermique optimal.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/chauffage`,
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
            "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Chauffage - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function ChauffageService() {
  return (
    <div className="bg-gray-100 py-10">
      <MessageCookies/>
      <div className="relative h-screen min-w-full w-full">
        <div className="bg-black opacity-60 inset-0 absolute"></div>
        <Image
          width={1920}
          height={1080}
          src="/service/chauffage.jpg"
          alt="Chauffage – Réparation et Installation"
          className="object-cover h-screen min-w-full w-full object-bottom"
          title="Chauffage – Réparation et Installation"
        />
        <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
          <h1 className="font-black text-2xl md:text-6xl text-white text-center">
            Chauffage – Réparation et Installation
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-4">
            Chez <strong>EcoTech Dépannage</strong>, nous comprenons l&apos;importance d&apos;un système de chauffage fiable, surtout pendant les mois froids. Nos services incluent la réparation, l&apos;installation et l&apos;entretien de chauffages, chaudières, et pompes à chaleur pour garantir votre confort thermique tout au long de l&apos;année.
          </p>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Nos Services de Chauffage Incluent :
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Réparation de Chauffage :</strong> Diagnostic rapide et réparation de radiateurs, chaudières et systèmes de chauffage défectueux.
            </li>
            <li>
              <strong>Installation de Chauffage :</strong> Installation de nouveaux systèmes de chauffage pour un confort thermique optimal.
            </li>
            <li>
              <strong>Entretien Préventif :</strong> Maintenance régulière pour prolonger la durée de vie de vos équipements de chauffage et améliorer leur efficacité énergétique.
            </li>
            <li>
              <strong>Optimisation Énergétique :</strong> Conseils et solutions pour améliorer l&apos;efficacité énergétique de votre système de chauffage.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Pourquoi Choisir EcoTech Dépannage ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Intervention Rapide :</strong> Disponible 24h/24 et 7j/7.
            </li>
            <li>
              <strong>Techniciens Certifiés :</strong> Expertise dans les dernières technologies de chauffage pour une installation ou réparation efficace.
            </li>
            <li>
              <strong>Solutions Énergétiques :</strong> Améliorez l&apos;efficacité énergétique de votre chauffage avec nos services sur mesure.
            </li>
            <li>
              <strong>Respect des Normes :</strong> Conformité avec les normes de sécurité et de performance.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Contactez-nous Aujourd&apos;hui !
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Ne laissez pas un problème de chauffage perturber votre confort. Appelez <strong>EcoTech Dépannage</strong> pour une intervention rapide et professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}
