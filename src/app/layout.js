import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';  // Add this import

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: { template: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | %s" },
  description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: [
    "plombier urgence", "Dépannage plomberie", "urgence plomberie", "urgence plombier", 
    "plombier ", "Dépannage ", "vitrier ", 
    "serrurier ", "plombier ", "électricien ", 
    "intervention d'urgence", "service 24h/24", "EcoTech Dépannage", "dépannage d'urgence 24h/24", 
    "dépannage 7j/7 ", "plombier urgence ", "serrurier urgence ", 
    "vitrier  urgence", "électricien  24h/24", "intervention rapide ", 
    "EcoTech Dépannage urgence", "réparation écologique "
  ],
  openGraph: {
    title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
    description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "EcoTech Dépannage",
    images: [
      {
        url: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7`,
      }
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_ID_MANAGER} />
      </head>
      <body className={`${fredoka.className} scrollbar scrollbar-thumb-[#0276FF]`}>
        <div className="flex flex-col h-screen justify-between ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
