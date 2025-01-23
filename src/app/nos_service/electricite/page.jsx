// pages/electricite.js
import MessageCookies from "@/components/tools/cookies/message";
import RealisationsCarousel from "@/components/tools/realisationsCarousel";
import Image from "next/image";

export  function generateMetadata() {
    return {
      title: "Électricité - Expert Réparation & Installation",
      description: "Besoin d’un électricien en Moselle ? EcoTech Dépannage propose des services de réparation, mise aux normes, et installation électrique. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
      alternates: {
        canonical: "/nos_service/electricite",
      },
      openGraph: {
        title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Électricité - Expert Réparation & Installation",
        description: "Besoin d’un électricien en Moselle ? EcoTech Dépannage propose des services de réparation, mise aux normes, et installation électrique. Disponible 24h/24, 7j/7, pour des interventions rapides et sécurisées. Contactez-nous pour un service fiable et adapté à vos besoins.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/nos_service/electricite`,
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
            alt: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Électricité - Expert Réparation & Installation",
          }
        ],
        type: "website",
      
      },
      
     
    };
   
  }

export default function ElectriciteService() {
  return (
    <div className="bg-gray-100 py-10">
      <MessageCookies/>
      <div className="">
        <div className=" relative h-screen min-w-full w-full">
            <div className="bg-black opacity-60 inset-0 absolute"></div>
            <Image   width={1920} height={1080}  src='/service/electricite.jpg' alt='Électricité – Votre Partenaire de Confiance pour Tous Vos Besoins Électriques' className="  object-cover object-top  h-screen min-w-full w-full" title='Électricité – Votre Partenaire de Confiance pour Tous Vos Besoins Électriques' />
            <div  className={` absolute inset-0 container text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col `}>
                <h1 className="font-black text-2xl md:text-6xl text-white text-center">Électricité – Votre Partenaire de Confiance pour Tous Vos Besoins Électriques</h1>                   
            </div>
        </div>        
        <div className="max-w-5xl mx-auto  overflow-hidden">
          <div className="p-6">
            <p className="text-gray-600 text-lg mb-4">
              Chez <strong>EcoTech Dépannage</strong>, nous comprenons
              l&apos;importance d&apos;un système électrique fiable et sécurisé. C&apos;est
              pourquoi nous proposons une gamme complète de services électriques
              adaptés à vos besoins, qu&apos;il s&apos;agisse d&apos;interventions d&apos;urgence ou
              de travaux programmés.
            </p>
            <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
              Nos Services Électriques Comprennent :
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
              <li>
                <strong>Dépannage et Réparation Électrique :</strong> Diagnostic
                et réparation rapide des pannes, courts-circuits, et problèmes
                de disjoncteurs.
              </li>
              <li>
                <strong>Mise aux Normes :</strong> Mise à jour complète des
                installations pour garantir sécurité et conformité.
              </li>
              <li>
                <strong>Installation Électrique :</strong> Conception et
                installation d&apos;un système moderne et économe en énergie.
              </li>
              <li>
                <strong>Éclairage et Automatisation :</strong> Solutions LED,
                systèmes intelligents pour un confort optimal.
              </li>
              <li>
                <strong>Sécurité Électrique :</strong> Installation de
                dispositifs de protection comme détecteurs de fumée et
                parafoudres.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
              Pourquoi Choisir EcoTech Dépannage ?
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
              <li>
                <strong>Intervention Rapide :</strong> Disponible 24h/24 et
                7j/7.
              </li>
              <li>
                <strong>Expertise Certifiée :</strong> Techniciens qualifiés
                utilisant les dernières technologies.
              </li>
              <li>
                <strong>Matériaux de Qualité :</strong> Composants durables et
                performants.
              </li>
              <li>
                <strong>Transparence et Conseil :</strong> Solutions adaptées à
                vos besoins et budget.
              </li>
              <li>
                <strong>Respect des Normes :</strong> Sécurité et performance
                garanties.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-[#0276FF] mb-4">
              Contactez-nous Aujourd&apos;hui !
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              N&apos;attendez pas qu&apos;un problème électrique devienne un danger.
              Appelez <strong>EcoTech Dépannage</strong> dès maintenant pour une
              intervention rapide et professionnelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
