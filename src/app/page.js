
import AboutUs from "@/components/pages/aboutUs";
import HomePage from "@/components/pages/home";
import Marche from "@/components/pages/marche";
import Realisations from "@/components/pages/realisations";
import Service from "@/components/pages/service";
import PhoneIcon from "@/components/tools/phoneIcon";

export async function generateMetadata() {
  return {
    title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
      description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
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
          alt: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
        }
      ],
      type: "website",

    },
  }
};
export default function Home() {
  return (
    <main className="flex flex-col">
      <PhoneIcon />
      <HomePage />
      <AboutUs />
      <Realisations />
      <Service />
      <Marche />
    </main>
  );
}
