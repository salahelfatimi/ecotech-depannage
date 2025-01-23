import MessageCookies from "@/components/tools/cookies/message";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Serrurerie - Expert Réparation & Installation",
    description:
      "EcoTech Dépannage propose des services de serrurerie, y compris l'ouverture de portes, le remplacement de serrures et l'installation de systèmes de sécurité. Disponible 24h/24 et 7j/7 pour des interventions d'urgence, nous assurons la sécurité de votre domicile et de vos locaux.",
    alternates: {
      canonical: "/nos_service/serrurerie",
    },
    openGraph: {
      title:
        "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Serrurerie - Expert Réparation & Installation",
      description:
        "EcoTech Dépannage propose des services de serrurerie, y compris l'ouverture de portes, le remplacement de serrures et l'installation de systèmes de sécurité. Disponible 24h/24 et 7j/7 pour des interventions d'urgence, nous assurons la sécurité de votre domicile et de vos locaux.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/serrurerie`,
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
            "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Serrurerie - Expert Réparation & Installation",
        },
      ],
      type: "website",
    },
  };
}

export default function SerrurerieService() {
  return (
    <div className="bg-gray-100 py-10">
      <MessageCookies/>
      <div className="relative h-screen min-w-full w-full">
        <div className="bg-black opacity-60 inset-0 absolute"></div>
        <Image
          width={1920}
          height={1080}
          src="/service/serrurerie.jpg"
          alt="Serrurerie – Ouverture de portes et Installation de Serrures"
          className="object-cover object-top h-screen min-w-full w-full"
          title="Serrurerie – Ouverture de portes et Installation de Serrures"
        />
        <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
          <h1 className="font-black text-2xl md:text-6xl text-white text-center">
            Serrurerie – Ouverture de portes et Installation de Serrures
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-4">
            Chez <strong>EcoTech Dépannage</strong>, nous comprenons
            l&apos;importance de la sécurité de votre domicile ou de vos locaux. Nous
            offrons des services de serrurerie rapides et efficaces pour résoudre
            tous vos problèmes de serrure, que ce soit une porte bloquée, une
            serrure cassée, ou l&apos;installation de systèmes de verrouillage haute
            sécurité.
          </p>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Nos Services de Serrurerie Incluent :
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Ouverture de Portes :</strong> Interventions d&apos;urgence pour
              ouvrir des portes bloquées ou fermées à clé, sans causer de
              dégâts.
            </li>
            <li>
              <strong>Remplacement de Serrures :</strong> Remplacement rapide de
              serrures endommagées ou obsolètes, pour assurer votre sécurité.
            </li>
            <li>
              <strong>Installation de Systèmes de Sécurité :</strong> Pose de
              serrures haute sécurité, de systèmes de verrouillage et de portes
              blindées pour protéger vos biens et votre famille.
            </li>
            <li>
              <strong>Réparation de Serrures :</strong> Réparation de serrures
              endommagées, qu&apos;elles soient mécaniques ou électroniques.
            </li>
            <li>
              <strong>Clés Perdues :</strong> Duplication ou remplacement de
              clés perdues ou volées pour garantir la sécurité de vos espaces.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Pourquoi Choisir EcoTech Dépannage ?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
            <li>
              <strong>Intervention Rapide :</strong> Disponibilité 24h/24 et
              7j/7 pour des interventions d&apos;urgence.
            </li>
            <li>
              <strong>Professionnalisme :</strong> Serruriers qualifiés et
              expérimentés pour garantir des interventions de qualité.
            </li>
            <li>
              <strong>Solutions de Sécurité Avancées :</strong> Installation de
              systèmes de sécurité modernes et fiables pour votre protection.
            </li>
            <li>
              <strong>Transparence et Confiance :</strong> Pas de frais cachés,
              et un service honnête adapté à vos besoins et votre budget.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
            Contactez-nous Aujourd&apos;hui !
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            En cas de porte bloquée, de serrure défectueuse, ou pour toute autre
            urgence en serrurerie, appelez <strong>EcoTech Dépannage</strong>
            pour une intervention rapide et professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}
